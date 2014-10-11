from rest_framework import generics

from .models import Status
from .serializers import StatusSerializer

class StatusView(generics.ListCreateAPIView):
    model = Status
    serializer_class = StatusSerializer
