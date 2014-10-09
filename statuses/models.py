from django.db import models

class Status(models.Model):
    text = models.CharField(max_length=160)
    created_at = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.text
