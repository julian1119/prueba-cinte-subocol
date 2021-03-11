import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InfoDTO} from '../Dtos/infoDTO';
import {ApiPaises} from '../services/apiPaises';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [MessageService]
})
export class DashboardComponent implements OnInit {

    basicData: any;
    basicOptions: any;
    form: FormGroup;
    arrayInfo: InfoDTO[] = [];
    infoDropdwn: any[] = [];

    constructor(private formBuilder: FormBuilder,
                private api: ApiPaises,
                private messageService: MessageService) {
    }

    ngOnInit() {

        this.api.getPaises().subscribe( paises => {
            paises.forEach( pais => {
             this.infoDropdwn.push({label: pais.name, value: pais.numericCode});
            });
        });

        this.basicData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#42A5F5'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#FFA726'
                }
            ]
        };

        this.basicOptions = {
            legend: {
                labels: {
                    fontColor: '#ebedef'
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: '#ebedef'
                    },
                    gridLines: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: '#ebedef'
                    },
                    gridLines: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                }]
            }
        };
        this.tableinfo();
        this.initForm();
    }

    initForm() {
        this.form = this.formBuilder.group({
            'temperaturaPrincipalInicial': [null, [Validators.required]],
            'temperaturaPrincipalFinal': [null, [Validators.required]],
            'DTBInicial': [null, [Validators.required]],
            'DTBFinal': [null, [Validators.required]],
            'placa': [null, [Validators.required]],
            'nombreTaller': [null, [Validators.required]],
            'NSiniestro': [null, [Validators.required]],
            'pais': [null, [Validators.required]],
            'carroCompras': [null],
            'manoObra': [null],
        });

    }

    tableinfo(){
        this.arrayInfo.push({
            codigo:'A01',  proyecto:'FHV', equipo: '',  costo: '$34.220 usd',   estado: 'completado',  pago: 'pagado'
        });
    }

    formValue(){
       const form = this.form.value;
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
    }
}
