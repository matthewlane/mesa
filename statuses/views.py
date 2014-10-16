from django.views.generic.list import ListView

from rest_framework import viewsets

from .models import Status
from .serializers import StatusSerializer

class IndexView(ListView):
    model = Status

class StatusView(viewsets.ModelViewSet):
    model = Status
    serializer_class = StatusSerializer
