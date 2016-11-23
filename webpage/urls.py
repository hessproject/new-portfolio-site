from django.conf.urls import url
from webpage import views

urlpatterns = [
    url(r'^$',
        views.index,
        name='index'),

    url(r'^about/$',
        views.about,
        name='about'),

    url(r'^skills/$',
        views.skills,
        name='skills'),

    url(r'^examples/$',
        views.examples,
        name='examples'),

    url(r'^blog/$',
        views.blog,
        name='blog'),

    url(r'^contact/$',
        views.contact,
        name='contact'),
]