from rest_framework import serializers

from .models import Status

class StatusSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Status
        fields = ('id', 'uuid', 'url', 'text', 'created_at')
