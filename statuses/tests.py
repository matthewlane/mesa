from django.test import TestCase
from .models import Status

class BasicTestCase(TestCase):
    def test_getting_root(self):
        self.client.get('/')

class StatusTest(TestCase):
    def setUp(self):
        Status.objects.create(text="status test string")

    def test_status_was_created(self):
        status = Status.objects.get(text="status test string")
        self.assertEqual(status.text, "status test string")
