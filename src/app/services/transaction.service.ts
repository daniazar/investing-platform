import { Injectable } from '@angular/core';
import { IProject} from '../objects/iproject'
@Injectable()
export class TransactionService {

  constructor() { }



      public  getProject(id: any): IProject {
        return {
      id: "1",
      title: "titulo 1",
      description: 'description lala alal al al alla la 1',
      image: "http://lorempixel.com/g/400/200/",
      maxAmount: 100,
      curAmount: 30,
      rewards: [{type: 1, id: 0, amount: 100, count: 0, investors: 2, description: 'dad de de d', title: 'tit', shares: 1},
              {type: 1, id: 1, amount: 100, count: 3, investors: 5, description: 'dad de de d', title: 'tit', shares: 5} ],
      TIR: 20,
      summary: 'El proyecto consiste en la puesta en marcha de un despacho de abogados, Nanse Jurídico dedicado a servicios jurídicos especializados en el municipio de Santiago de Compostela, especializado en las áreas de derecho laboral, mercantil y administrativo.',
      objective: 'Nanse jurídico, S.L. estará compuesta por un equipo profesional multidisciplinar, inicialmente constituida por las dos promotoras, y se dedicará principalmente al asesoramiento y asistencia jurídica de empresas, particulares e instituciones, en las áreas de laboral, mercantil y administrativo.',
      team: 'Las promotoras, Paula Barrios y Montse Basquiños cuentan con experiencia en los sectores relativos a las áreas específicas y especializadas en las que van a ejercer su actividad jurídica',
      strategy: 'Los clientes potenciales de Nanse jurídico, S.L. serán los siguientes:'
+ '-	 Clientes particulares. Estos clientes se pondrán en contacto con la empresa para solicitar'
+ 'servicios relacionados, principalmente, con reclamaciones –despidos, accidentes'
+ 'laborales, cantidades, acoso laboral, etc…- y comunicaciones a la empresa –reducción'
+ 'de jornada, excedencias, dimisiones, etc…-.'
+ '-	 Pequeñas y medianas empresas ya en funcionamiento. Demandan asesoramiento'
+ 'laboral, medioambiente, urbanismo, mediación y arbitraje, asistencia jurídica, asesoramiento'
+ 'en ampliaciones de capital y fusiones, asistencia jurídica en el concurso de'
+ 'acreedores y en la disolución y liquidación de la sociedad.'
+ '-	 Pequeñas y medianas empresas de nueva creación. Estas empresas solicitarán, básicamente,'
+ 'los servicios de constitución de sociedades, asesoramiento mercantil, urbanístico'
+ 'y medioambiental.'
+ '-	 Administración pública. Los contratos con la administración pública se realizarán a'
+ 'medio/largo plazo, cuando la empresa tenga currículo suficiente como para poder'
+ 'presentarse a concursos o licitaciones.',
      characteristics: 'El proyecto basará sus factores clave de éxito en los siguientes elementos:' +
+ '•	 Atención personalizada al cliente: El objetivo de la empresa será el de conseguir, no' 
+ 'sólo captar a los clientes, sino fidelizarlos. Para ello, las promotoras se encargarán'
+ 'de la comunicación con las principales empresas clientes y al resto de los clientes se'
+ 'les designará a un trabajador que será el que conozca en detalle la situación de la'
+ 'empresa y le ofrecerá el mejor asesoramiento de forma individual.'
+ '•	 Trabajo en equipo de ambas promotoras para un enfoque global: Todo el personal'
+ 'debe tener una idea aunque sea somera de los asuntos que se tramitan en el despacho,'
+ 'ya que así se pueden detectar otras necesidades de los clientes que puedan ser'
+ 'cubiertas por los servicios del despacho.'
+ '•	 Discreción. La importancia de los temas a tratar para los clientes y lo confidencial de'
+ 'la información hacen de la seriedad y la discreción de promotores y trabajadores un'
+ 'factor de éxito de la empresa.'
+ '•	 Formación: El personal de la empresa tendrá una formación acorde con su puesto de'
+ 'trabajo y complementaria con la de los demás trabajadores. Además, Nanse jurídico'
+ 'S.L fomentará la formación continua entre los trabajadores para que estén permanentemente'
+ 'actualizados en sus conocimientos'
+ '•	 Imagen y prestigio del despacho: Para conseguir que los clientes perciban una buena'
+ 'imagen de la empresa y de su nombre, la empresa ofrecerá calidad, una imagen'
+ 'cuidada del negocio y un trato personalizado y exquisito a los clientes.'
+ '•	 Utilización de los soportes técnicos más avanzados y bases de legislación y jurisprudencia' 
+ '•	 Grado de especialización: empresa especializada en derecho laboral, concurso de'
+ 'acreedores, derecho de los consumidores y procedimiento sancionador.'
+ 'RESUMEN DEL PLAN DE NEGOCIO'
+ 'DESPACHO DE ABOGADOS'
+ '9'
+ '•	 Buena selección de los profesionales subcontratados: Se contratarán a los mejores'
+ 'profesionales, ya que en muchos casos van a influir de forma decisiva en la percepción'
+ 'final del cliente de la calidad del servicio.'
+ '•	 Asesoramiento personalizado: Que nos permita ofertar al cliente los servicios idó-'
+ 'neos para su caso concreto: actividad de la empresa, número de trabajadores, situación'
+ 'económica…'
+ ' En el sector de los servicios jurídicos ésta es sin duda la mejor forma de promoción.'
        }

      }

     public  getProjectList(): any[] {
       let loc = 'Buenos Aires, Arg';
       let desc = 'description lala alal al al alla la 1';
       let img ='https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_284x96dp.png';
        return [
          {id: '1', TNA: 4, location: loc, category: 'Tech', title: 'titulo 1', description: desc, image: img, invesment: 100, duration: 3, curAmount: 30},
          {id: '2', TNA: 4, location: loc, category: 'Tech', title: 'titulo 2', description: desc, image: img, invesment: 100, duration: 3, curAmount: 400},
          {id: '3', TNA: 4, location: loc, category: 'Tech', title: 'titulo 3', description: desc, image: img, invesment: 100, duration: 3, curAmount: 30},
          {id: '4', TNA: 4, location: loc, category: 'Tech', title: 'titulo 4', description: desc, image: img, invesment: 100, duration: 3, curAmount: 30},
          {id: '5', TNA: 4, location: loc, category: 'Tech', title: 'titulo 5', description: desc, image: img, invesment: 100, duration: 3, curAmount: 10},
          {id: '6', TNA: 4, location: loc, category: 'Tech', title: 'titulo 6', description: desc, image: img, invesment: 150, duration: 3, curAmount: 30}
        ];
     }

     public editProject(id: any){
       
     }

     public deleteProject(id: any){
       
     }


}
