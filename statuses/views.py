from rest_framework import viewsets

from .models import Status
from .serializers import StatusSerializer

class StatusView(viewsets.ModelViewSet):
    model = Status
    serializer_class = StatusSerializer
