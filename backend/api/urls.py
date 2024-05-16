from django.urls import path
from .views import *

urlpatterns = [
    path('clients/', view=ClientsView.as_view(), name='clients-list'),
    path('clients/<int:pk>', view=ClientView.as_view(), name='clients-list'),
    path('clients/update/<int:pk>', view=ClientsUpdateView.as_view(), name='update-client'),
    path('clients/delete/<int:pk>', view=ClientsDeleteView.as_view(), name='delete-client'),
    path('invoises/', view=InvoisesView.as_view(), name='invoise-list'),
    path('invoises/<int:cl>', view=InvoisesClientView.as_view(), name='invoise-list'),
    path('invoises/update/<int:pk>', view=InvoisesUpdateView.as_view(), name='update-invoise'),
    path('invoises/delete/<int:pk>', view=InvoisesDeleteView.as_view(), name='delete-invoise'),
    path('salaries/', view=SalariesView.as_view(), name='Salaries-list'),
    path("invoisesalaries/", view=InvoiseSalariesView.as_view(), name="Invoise-Salaries-View"),
    path("invoisesalaries/<str:in>", view=InvoiseSalariesByNameView.as_view(), name="Invoise-Salaries-by-name-View"),
    path("invoisesalaries/delete/<int:pk>", view=InvoiseSalariesDeleteView.as_view(), name="Invoise-Salaries-View"),
    path('salaries/update/<int:pk>', view=SalariesUpdateView.as_view(), name='update-salaries'),
    path('salaries/delete/<int:pk>', view=SalariesDeleteView.as_view(), name='delete-salaries'),
    path('additionals/', view=AdditionalsView.as_view(), name='Additional-list'),
    path('additionals/<int:pk>', view=AdditionalsView.as_view(), name='Additional-list'),
    path('additionals/update/<int:pk>', view=AdditionalsUpdateView.as_view(), name='update-Additional'),
    path('additionals/delete/<int:pk>', view=AdditionalsDeleteView.as_view(), name='delete-Additional'),
    path('receivedcash/', view=ReceivedCashView.as_view(), name='Received-Cash-list'),
    path('receivedcash/<int:pk>', view=ReceivedCashView.as_view(), name='Received-Cash-list'),
    path('receivedcash/update/<int:pk>', view=ReceivedCashUpdateView.as_view(), name='update-Received-Cash'),
    path('receivedcash/delete/<int:pk>', view=ReceivedCashDeleteView.as_view(), name='delete-Received-Cash')
]
