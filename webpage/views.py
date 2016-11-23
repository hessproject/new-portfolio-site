import os
from django.shortcuts import render
from django.core.mail import EmailMessage
from webpage.forms import ContactForm

# Create your views here.

def index(request):
    context_dict = {}

    response = render(request, 'webpage/index.html', context=context_dict)
    return response

def about(request):
    context_dict = {}

    response = render(request, 'webpage/about.html', context=context_dict)
    return response


def skills(request):
    context_dict = {}

    response = render(request, 'webpage/skills.html', context=context_dict)
    return response


def examples(request):
    context_dict = {}

    response = render(request, 'webpage/examples.html', context=context_dict)
    return response


def blog(request):
    context_dict = {}

    response = render(request, 'webpage/blog.html', context=context_dict)
    return response


def contact(request):
    context_dict = {}

    if request.method == 'GET':
        form = ContactForm
        context_dict['form'] = form

    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():

            data = form.cleaned_data

            contact_name = data['contact_name']
            contact_email = data['contact_email']
            if data['subject']:
                subject = data['subject']
            else:
                subject = "(No Subject)"
            content = data['content']

            email = EmailMessage(subject,
                                 content,
                                 contact_email,
                                 to=[os.environ.get('DEFAULT_TO_EMAIL'), ],
                                 reply_to=[contact_email,])

            email.send()

            form = ContactForm
            message = 'Your email has been sent!'

            context_dict['form'] = form
            context_dict['message'] = message

    response = render(request, 'webpage/contact.html', context=context_dict)
    return response