from __future__ import unicode_literals

from django.db import models
from django.core.validators import *

from django.contrib.auth.models import User, Group

from django.contrib import admin
import base64

class Ingredient(models.Model):
    ingredientName = models.CharField(max_length=100, blank=False)
    def __str__(self):
        return str(self.ingredientName)

class Recipe(models.Model):
    recipeName = models.CharField(max_length=100, blank=False)
    description = models.CharField(max_length=1000, blank=False)
    directions = models.CharField(max_length=10000, blank=False)
    userid = models.CharField(max_length=1000, blank=True)
    def __str__(self):
        return str(self.recipeName)

class RecipeIngredients(models.Model):
    recipe =  models.ForeignKey(Recipe, on_delete=models.CASCADE)
    ingredient =  models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    amount = models.IntegerField(validators=[MinValueValidator(0)])
    unit = models.CharField(max_length=100, blank=False)
    def __str__(self):
        return str(self.ingredient.ingredientName)

class RecipeReview(models.Model):
    recipe =  models.ForeignKey(Recipe, on_delete=models.CASCADE)
    recipeReview = models.CharField(max_length=1000, blank=False)
    recipeRating = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)])
    userid = models.CharField(max_length=1000, blank=True)
    flaggedForReview = models.BooleanField(default=False)
    def __str__(self):
        return str(self.recipe.recipeName) + str(': ') + str(self.recipeReview)
