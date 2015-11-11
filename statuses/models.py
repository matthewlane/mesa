import uuid
from django.db import models

class Status(models.Model):
    text = models.CharField(max_length=160)
    created_at = models.DateTimeField(auto_now_add=True)
    uuid = models.UUIDField(default=uuid.uuid4)

    def __unicode__(self):
        return self.text

    class Meta:
        ordering = ['-created_at']
