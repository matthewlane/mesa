from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.renderers import JSONRenderer

from .models import Status
from .serializers import StatusSerializer


def index(request):
    statuses = Status.objects.all()
    serializer = StatusSerializer(statuses, many=True,
                                  context={'request': request})
    json = JSONRenderer().render(serializer.data)

    return render(request, 'base.html', {'initial': json})


class StatusView(viewsets.ModelViewSet):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer
