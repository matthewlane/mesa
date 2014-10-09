from django.db import models

class Status(models.Model):
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.text
