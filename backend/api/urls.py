from django.conf.urls import include, url

#Django Rest Framework
from rest_framework import routers

from api import controllers
from django.views.decorators.csrf import csrf_exempt

#REST API routes
router = routers.DefaultRouter(trailing_slash=False)

urlpatterns = [
    url(r'^session', csrf_exempt(controllers.Session.as_view())),
    url(r'^register', csrf_exempt(controllers.Register.as_view())),
    url(r'^homePageRecipe', csrf_exempt(controllers.HomePageRecipe.as_view())),
    url(r'^recipe/(?P<id>[0-9]+)$', csrf_exempt(controllers.RecipeViewing.as_view())),
    url(r'^recipe', csrf_exempt(controllers.RecipeManagement.as_view())),
    url(r'^recIngredients/(?P<id>[0-9]+)$', csrf_exempt(controllers.RecipeIngredientsForRecipe.as_view())),
    url(r'^ingredients/(?P<id>[0-9]+)$', csrf_exempt(controllers.IngredientsForRecipe.as_view())),
    url(r'^reviews/(?P<id>[0-9]+)$', csrf_exempt(controllers.ReviewsForRecipies.as_view())),
    url(r'^reviews', csrf_exempt(controllers.ReviewManagement.as_view())),
    url(r'^', include(router.urls)),
]
