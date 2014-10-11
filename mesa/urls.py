from django.conf.urls import patterns, include, url
from django.contrib import admin

from statuses import views

urlpatterns = patterns('',
    url(r'^statuses/$', views.StatusView.as_view(), name='status-list'),
    url(r'^admin/', include(admin.site.urls)),
)
