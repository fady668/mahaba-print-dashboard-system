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
    path("invoisesalaries/<int:pk>", view=InvoiseSalariesByNameView.as_view(), name="Invoise-Salaries-by-name-View"),
    path('salaries/<int:pk>', view=SalariesUpdateDeleteView.as_view(), name='update-salaries'),
    path('additionals/', view=AdditionalsView.as_view(), name='Additional-list'),
    path('additionals/<int:pk>', view=AdditionalsUpdateDeleteView.as_view(), name='Additional-list'),
    path('receivedcash/', view=ReceivedCashView.as_view(), name='Received-Cash-list'),
    path('receivedcash/byclientid/<int:cl>', view=ReceivedCashByClientName.as_view(), name='Received-Cash-by-client-id-list'),
    path('receivedcash/byinvoiseid/<int:pk>', view=ReceivedCashView.as_view(), name='Received-Cash-by-invoise-id-list'),
]