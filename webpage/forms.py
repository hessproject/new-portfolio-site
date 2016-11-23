from django import forms

class ContactForm(forms.Form):
    contact_name = forms.CharField(required=True,
                                   widget=forms.TextInput(attrs={'class': 'formInput'}),)

    contact_email = forms.EmailField(required=True,
                                     widget=forms.EmailInput(attrs={'class': 'formInput'}),)

    subject = forms.CharField(required=False,
                              widget=forms.TextInput(attrs={'class': 'formInput'}),)

    content = forms.CharField(required=True,
                              widget=forms.Textarea(attrs={'class': 'formInput message'}),)
