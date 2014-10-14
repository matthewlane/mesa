from django.conf.urls import patterns, url

from statuses import views

urlpatterns = patterns('',
    url(r'^$', views.IndexView.as_view(), name='index'),
    url(r'^statuses/$', views.StatusView.as_view(), name='status-list'),
)
