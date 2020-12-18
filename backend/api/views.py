from django.shortcuts import render

# Create your views here.
def frontend(request):
    context = {}
    return render(request, 'index.html', context)
