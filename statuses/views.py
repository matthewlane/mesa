from rest_framework import viewsets

from .models import Status
from .serializers import StatusSerializer

class StatusView(viewsets.ModelViewSet):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer
