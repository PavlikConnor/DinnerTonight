#from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import *
from django.contrib.auth import *
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
#from django.shortcuts import render_to_response
from django.template import RequestContext
from django_filters.rest_framework import DjangoFilterBackend


from django.shortcuts import *

# Import models
from django.db import models
from django.contrib.auth.models import *
from api.models import *

#REST API
from rest_framework import viewsets, filters, parsers, renderers
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth import authenticate, login, logout
from rest_framework.permissions import *
from rest_framework.decorators import *
from rest_framework.authentication import *

#filters
#from filters.mixins import *

from api.pagination import *
import json, datetime, pytz
from django.core import serializers
import requests

import json
import bleach

def home(request):
   """
   Send requests to / to the ember.js clientside app
   """
   return render_to_response('ember/index.html',
               {}, RequestContext(request))

def xss_example(request):
  """
  Send requests to xss-example/ to the insecure client app
  """
  return render_to_response('dumb-test-app/index.html',
              {}, RequestContext(request))

class Register(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        # Login
        usernameBleach = bleach.clean(request.data.get('username'))
        passwordBleach = bleach.clean(request.data.get('password'))
        emailBleach = bleach.clean(request.data.get('email'))
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')

        if username != usernameBleach:
            return Response({'success': False, 'message': 'Potential XSS attack detected'}, status=status.HTTP_400_BAD_REQUEST)

        if password != passwordBleach:
            return Response({'success': False, 'message': 'Potential XSS attack detected'}, status=status.HTTP_400_BAD_REQUEST)

        if email != emailBleach:
            return Response({'success': False, 'message': 'Potential XSS attack detected'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=username).exists():
            return Response({'username': 'Username is taken.', 'status': 'error'})
        elif User.objects.filter(email=email).exists():
            return Response({'email': 'Email is taken.', 'status': 'error'})

        #especially before you pass them in here
        newuser = User.objects.create_user(email=email, username=username, password=password)
        #newprofile = Profile(user=newuser)
        #newprofile.save()

        return Response({'status': 'success', 'userid': newuser.id, 'username': newuser.username})

class Session(APIView):
    permission_classes = (AllowAny,)
    def form_response(self, isauthenticated, userid, username, error=""):
        data = {
            'isauthenticated': isauthenticated,
            'userid': userid,
            'username': username
        }
        if error:
            data['message'] = error

        return Response(data)

    def get(self, request, *args, **kwargs):
        # Get the current user
        if request.user.is_authenticated():
            return self.form_response(True, request.user.id, request.user.username)
        return self.form_response(False, None, None)

    def post(self, request, *args, **kwargs):
        # Login
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return self.form_response(True, user.id, user.username)
            return self.form_response(False, None, None, "Account is suspended")
        return self.form_response(False, None, None, "Invalid username or password")

    def delete(self, request, *args, **kwargs):
        # Logout
        logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)

class HomePageRecipe(APIView):
    permission_classes = (AllowAny,)
    parser_classes = (parsers.JSONParser,parsers.FormParser)
    renderer_classes = (renderers.JSONRenderer, )

    def get(self, request, format=None):
        recipes = Recipe.objects.order_by('-addedDate')[:5]
        json_data = serializers.serialize('json', recipes)
        content = {'recipes': json_data}
        return HttpResponse(json_data, content_type='json')

class RecipeIngredientsForRecipe(APIView):
    permission_classes = (AllowAny,)
    parser_classes = (parsers.JSONParser,parsers.FormParser)
    renderer_classes = (renderers.JSONRenderer, )

    def get(self, request, id):
        print(id)
        if not Recipe.objects.filter(id=id).exists():
            return Response({'recipe': 'Recipe does not exist.', 'status': 'error'})
        ingredients = RecipeIngredients.objects.filter(recipe__id=id)
        json_data = serializers.serialize('json', ingredients)
        return HttpResponse(json_data, content_type='json')

class IngredientsForRecipe(APIView):
    permission_classes = (AllowAny,)
    parser_classes = (parsers.JSONParser,parsers.FormParser)
    renderer_classes = (renderers.JSONRenderer, )

    def get(self, request, id):
        if not Recipe.objects.filter(id=id).exists():
            return Response({'recipe': 'Recipe does not exist.', 'status': 'error'})
        recIngredients = RecipeIngredients.objects.filter(recipe__id=id)
        ingIds = []
        for recIng in recIngredients:
            ingIds.append(recIng.ingredient.id)
        ings = Ingredient.objects.filter(id__in=ingIds)
        json_data = serializers.serialize('json', ings)
        return HttpResponse(json_data, content_type='json')

class ReviewsForRecipies(APIView):
    permission_classes = (AllowAny,)
    parser_classes = (parsers.JSONParser,parsers.FormParser)
    renderer_classes = (renderers.JSONRenderer, )

    def get(self, request, id):
        if not Recipe.objects.filter(id=id).exists():
            return Response({'recipe': 'Recipe does not exist.', 'status': 'error'})
        recReviews = RecipeReview.objects.filter(recipe__id=id)
        json_data = serializers.serialize('json', recReviews)
        return HttpResponse(json_data, content_type='json')


class RecipeViewing(APIView):
    permission_classes = (AllowAny,)
    parser_classes = (parsers.JSONParser,parsers.FormParser)
    renderer_classes = (renderers.JSONRenderer, )

    def get(self, request, id):
        if not Recipe.objects.filter(id=id).exists():
            return Response({'recipe': 'Recipe does not exist.', 'status': 'error'})
        recipe = Recipe.objects.filter(id=id).first()
        json_data = serializers.serialize('json', [recipe,])
        content = {'recipe': json_data}
        return HttpResponse(json_data, content_type='json')

class ReviewManagement(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = (parsers.JSONParser,parsers.FormParser)
    renderer_classes = (renderers.JSONRenderer, )

    def post(self, request, *args, **kwargs):
        recipeReviewBleach = bleach.clean(request.data.get('recipeReview'))
        id = request.data.get('recipeId')
        recipeReview = request.data.get('recipeReview')
        recipeRating = request.data.get('recipeRating')

        if recipeReview != recipeReviewBleach:
            return Response({'success': False, 'message': 'Potential XSS attack detected'}, status=status.HTTP_400_BAD_REQUEST)

        if recipeRating > 5:
            return Response({'success': False, 'message': 'Rating must be from 0 to 5'}, status=status.HTTP_400_BAD_REQUEST)
        if recipeRating < 0:
            return Response({'success': False, 'message': 'Rating must be from 0 to 5'}, status=status.HTTP_400_BAD_REQUEST)
        if len(''.join(recipeReview)) == 0:
            return Response({'success': False, 'message': 'Review must be greater than 0 characters'}, status=status.HTTP_400_BAD_REQUEST)

        if not Recipe.objects.filter(id=id).exists():
            return Response({'recipe': 'Recipe does not exist.', 'status': 'error'})

        newRecipeReview = RecipeReview(
            recipe = Recipe.objects.filter(id=id).first(),
            recipeReview = recipeReview,
            recipeRating = recipeRating,
            userid = request.user.id
        )

        try:
            newRecipeReview.clean_fields()
        except ValidationError as e:
            return Response({'success':False, 'error':e}, status=status.HTTP_400_BAD_REQUEST)

        newRecipeReview.save()
        return Response({'success': True}, status=status.HTTP_200_OK)


class RecipeManagement(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = (parsers.JSONParser,parsers.FormParser)
    renderer_classes = (renderers.JSONRenderer, )

    def post(self, request, *args, **kwargs):
        recipeNameBleach = bleach.clean(request.data.get('recipeName'))
        descriptionBleach = bleach.clean(request.data.get('description'))
        directionsBleach = bleach.clean(request.data.get('directions'))
        recipeName = request.data.get('recipeName')
        description = request.data.get('description')
        directions = request.data.get('directions')

        ingredients = request.data.get('ingredients')
        print(ingredients)
        if recipeName != recipeNameBleach:
            return Response({'success': False, 'message': 'Potential XSS attack detected'}, status=status.HTTP_400_BAD_REQUEST)

        if description != descriptionBleach:
            return Response({'success': False, 'message': 'Potential XSS attack detected'}, status=status.HTTP_400_BAD_REQUEST)

        if directions != directionsBleach:
            return Response({'success': False, 'message': 'Potential XSS attack detected'}, status=status.HTTP_400_BAD_REQUEST)

        if ingredients.count == 0:
            return Response({'success': False, 'message': 'Must have at least one ingredient'}, status=status.HTTP_400_BAD_REQUEST)

        newRecipe = Recipe(
            recipeName = recipeName,
            description = description,
            directions = directions,
            userid = request.user.id
        )

        try:
            newRecipe.clean_fields()
        except ValidationError as e:
            return Response({'success':False, 'error':e}, status=status.HTTP_400_BAD_REQUEST)

        newRecipe.save()

        for ingredient in ingredients:
            print(ingredient)
            if not Ingredient.objects.filter(ingredientName=ingredient['ingredientName']).exists():
                newIng = Ingredient(
                    ingredientName = ingredient['ingredientName']
                )
                newIng.save()
            newRecipeIng = RecipeIngredients(
                recipe =  newRecipe,
                ingredient = Ingredient.objects.filter(ingredientName=ingredient['ingredientName']).first(),
                amount = ingredient['amount'],
                unit = ingredient['unit']
            )
            newRecipeIng.save()
        return Response({'success': True}, status=status.HTTP_200_OK)
