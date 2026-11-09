import { afterEveryRender, afterNextRender, Component, effect, OnInit, signal } from '@angular/core';
import { Title } from '../../components/title/title';


const log = (...messages: string[]) => {

  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')}`,
    'color: #bada55');

}

@Component({
  selector: 'app-home-page',
  imports: [Title],
  templateUrl: './home-page.html',
})
export class HomePage implements OnInit {

  traditionalProperty = 'Isaac';
  signalProperty = signal('Isaac');

  constructor() { }

  changeTraditional() {
    this.traditionalProperty = 'Aguirre'
  }

  changeSignal() {
    this.signalProperty.set('Aguirre')
  }

  basicEffect = effect(( onCleanup )=>{
    log('effect', 'Disparar efectos secundarios')

    onCleanup(()=>{
      log('onCleanup', 'Se ejecuta cuando el efecto se va a destruir')
    })

  })

  ngOnInit() {
    log('ngOnInit', 'Se ejecuta después de que Angular haya inicializado todas las propiedades ligadas a datos de una directiva.');
  }
  ngOnChanges() {
    log('ngOnChanges','Se ejecuta cada vez que se comprueban las propiedades ligadas a datos de una directiva.');
  }
  ngDoCheck() {
    log('ngDoCheck','Se ejecuta durante cada comprobación de cambios de la aplicación.');
  }
  ngAfterContentInit() {
    log('ngAfterContentInit','Se ejecuta después de que Angular haya proyectado contenido externo en la vista del componente.');
  }
  ngAfterContentChecked() {
    log('ngAfterContentChecked','Se ejecuta cada vez que Angular comprueba el contenido proyectado en la vista del componente.');
  }
  ngAfterViewInit() {
    log('ngAfterViewInit','Se ejecuta después de que Angular inicializa la vista de un componente y las vistas secundarias / la vista infantil.');
  }
  ngAfterViewChecked() {
    log('ngAfterViewChecked','Se ejecuta cada vez que Angular comprueba las vistas del componente y las vistas secundarias / la vista infantil.');
  }
  ngOnDestroy() {
    log('ngOnDestroy', 'Se ejecuta cuando se destruye el componente')
  }

  //

  afterNextRenderEffect = afterNextRender(() => {
    log('afterNextRenderEffect', 'Se ejecuta cuando todos los componentes ya han sido renderizados')
  })
  afterEveryRender = afterEveryRender(() => {
    log('afterEveryRender', '')
  })

}
