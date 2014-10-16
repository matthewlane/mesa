from django.conf.urls import include, patterns, url
from django.views.generic.base import TemplateView

from rest_framework.routers import DefaultRouter
from statuses import views

router = DefaultRouter()
router.register(r'statuses', views.StatusView)

urlpatterns = patterns('',
    url(r'^$', TemplateView.as_view(template_name='statuses/status_list.html'),
        name='index'),
    url(r'^api/', include(router.urls)),
)
