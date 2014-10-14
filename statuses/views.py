from django.views.generic.list import ListView

from rest_framework import generics

from .models import Status
from .serializers import StatusSerializer

class IndexView(ListView):
    model = Status
    template_name = "index.html"

class StatusView(generics.ListCreateAPIView):
    model = Status
    serializer_class = StatusSerializer
