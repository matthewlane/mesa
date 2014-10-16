from django.conf.urls import include, patterns, url
from rest_framework.routers import DefaultRouter
from statuses import views

router = DefaultRouter()
router.register(r'statuses', views.StatusView)

urlpatterns = patterns('',
    url(r'^$', views.IndexView.as_view(), name='index'),
    url(r'^api/', include(router.urls)),
)
