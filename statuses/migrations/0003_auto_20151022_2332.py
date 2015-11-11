# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('statuses', '0002_auto_20141009_0224'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='status',
            options={'ordering': ['-created_at']},
        ),
        migrations.AddField(
            model_name='status',
            name='uuid',
            field=models.UUIDField(default=uuid.uuid4),
        ),
    ]
