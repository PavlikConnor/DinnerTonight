###################################
#
# CYBR8470 Dev Docker Container
# @author Matt Hale
#
###################################

# Pull base image.
FROM python:3.6
ENV PYTHONUNBUFFERED 1

# Setup linkages to code repositories and add to image

WORKDIR /var/www/backend

#Python packages
RUN pip install Django==1.11
RUN pip install djangorestframework==3.6.3
RUN pip install markdown
RUN pip install django-filter==1.1
RUN pip install psycopg2-binary
RUN pip install requests
RUN pip install gunicorn==19.6.0
