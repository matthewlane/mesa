from django.conf.urls import include, url

from rest_framework.routers import DefaultRouter
from statuses import views

router = DefaultRouter()
router.register(r'statuses', views.StatusView)

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^api/', include(router.urls)),
]
