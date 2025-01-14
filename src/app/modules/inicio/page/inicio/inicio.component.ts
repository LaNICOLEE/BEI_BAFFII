import { Component, OnInit } from '@angular/core';
// NUEVA INTERFAZ
import { Perro } from '../../../../models/perros';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // PROPIEDAD PÚBLICA (TIPO ARRAY)
  public info: Perro[];

  // INICIALIZA LA PROPIEDAD INFO
  constructor(){
    this.info = [
      {
        id: "",
        raza: "Golden",
        descripcion: "Foto de un Golden Retriever",
        imagen:"https://www.hepper.com/wp-content/uploads/2021/11/golden-retriever_Shutterstock.jpg",
        alt:"Golden Retriever"
      },
      {
        id: "",
        raza: "Rottweiler",
        descripcion: "Foto de un Rottweiler",
        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Rottweiler_kopf_2.jpg/366px-Rottweiler_kopf_2.jpg",
        alt:"Rottweiler"
      },
      {
        id: "",
        raza: "Border Collie",
        descripcion: "Foto de un Border Collie",
        imagen:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMVFRUXFxgWFRUVFxYWFRgZGBUWFhgYGhYYHSggGBolHRcWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGC0fHR0tLS0tLS0tLS0tLS0tLS0tLSstLS0rLS0tLSstKy0tLS0tLS0tKy0tMC0tLSstLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAQL/xAA8EAABAwIDBgUBBgQFBQAAAAABAAIRAyEEEjEFBgdBUXETImGBkaEyQrHB0fAUI1LhYoKisvEXJTNy0v/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEAAgMAAwAAAAAAAAAAAAERAiEDEkExUWH/2gAMAwEAAhEDEQA/AJxREQEREBERAREQEREBERAREQEWA2pvngcO806mIYHjVo8xHeLDsquzt7MHXtTxDCehOU/6oQZpFRbimG4e09nBVkBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBaLxZ3mrYPDtbQa4OqSHVcpLabQL+aIDjNuxW9IUHHVfHXN5JuT/AHVD+NfMhxHYrZuKtP8A7jiIAAD+VuS1TD4cuTVVW7TrN0qvF5+0flbtulxTxuGePEea9Owc1/2gBzBWl1MLl1+oVuIBsg693b29SxtFtakbEXHMHoVlVzDuZvHWwLg6m6xAlvLkT72j3U87qb4Uca1oaYqESWfn9ERsqIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgL5e8NBJMAakr6Vtj6gawkn8PzQc98WfCfjnvY5hDgJykG4tf1WrbLokkECwNh+Sz3E2uHYk2B1k+YfiT9FrWxNoupPE3YTzuAVmtxum0dmUjSzZQAWyIjUaj3APYgTqJj/FURn8vutt3nx/jMbk8oBuGn7wGscj17DosBhsINSp45V8lhgaR7j8CpK4RPZSxhdVcGSwtbmMDN5efytGpkDSFXwVMue0E2kfj9Lc+3VdpI42uoWPDhIII6i6+lo+5O7FTD0c3jvzvaCBOZrZAMx95YDiZt7aGGe1lOoWsLQc7G5ZP3r+inr2eyV1b4/G06NN1Wo4NY0SSVB2yuK2MpDI/LUi0vBn5BC1vevezE4101anl+6xtmD/KOfqU9V1KH/VujnMt8ujRzJnr0he1OMWFa6C0x1CgeoepVo/zGf+P7rKul9mcU9n1TDqhpn/Fp8hbM3eDCluf+IpZdZL2j8SuQyY5fj+iuKGPLRANv6TcfVB1LiN+NnM+1i6Ps7N/tlZfZ20aWIZno1GVG9WEEdjGhXI5xIPp6SstuxvLXwFYVqLo5PYfsPb/S4fnqFcHViLF7s7cp47DU8TS+y8XablrgYc0xzBBCyigIiICIiAiIgIiICIiAiIgIiICIiAsRvPVDaDpAINrua3/csusVvHgjVovAbmdBgE+X3BsUHL29mXxn5C7W4JBg9wsRh2WMlZreygadZ7XANM3a0gAey14PJNki1mMNVLvLM+upV6Ois9m04HqbKviq7aYi3rz+FUMRjMqze6hZXr06Y1dZajjnAtBBJubRp6LaOHGDe7FMc1pht3H2sPcwkqV0rs/D+HTYwfdaB8BRfxhxpIbTadJkDnPP6fu6lJriKcnk2T8KAuJu2f5uVrYJJc49eQHby/UpLnaWNNfhnNF1bVH8lTpbRc51z26KrXE3tPp+quri1rA8lTw7STcx3EKs4SqBgc/dSrH1iAR0j5Vk5p5Kq2qSbme63rhdu6zF4tnihuRpmDYOi8X17KDZeGfCelisKzFY11T+Z5qdJjsgycnPMTJ1ABFo6resJwj2Wxwd4VR4H3H1ahZ7ib9it6Y0AAAAAWAGgHQL1BTw9BrGtYxoa1oAa1oAaANAANAqiIgIiICIiAiIgIiICIiAiIgIiICIiAsPvbjfBwtRwnMRlYGyCXHQWv6mOQKzCw29VBpw9R7nObkaS0tuQYtAi5mEHMO9NLI85nS8klzQ2A3/ADTc+nLusNhxq46BV9rS6o4kk3Opnn15q3rnRg/ZRayeExYHeFf7FLKbxWcG1XtNmvvTbZ0uIkZtWfVY7CYIAAnXvYK6wFLM7IACTp52j80sSXGSxr34+oA2lTL3ENy0abmiJN4kzGkypv4e7o/wdCKgGcmSBy6SVbbjbuUcBhjiKgAdlzOcb5W66xqsPtPiscxFGk0tBsXuufYafKsiW6lF2kKAeL+x/CqZv6ri/qLD6rb9ncUw54bWpZR1YZj2K2LevZNLaOEJZDiRmpuH77q4mubdk7ErVyfDDfKJ8zgJnkAT5jAJgXgL2kCC6m8ZXAlrh0I9Ff4zBmk8tIBAMAW1FrxzWKxNUZw4Az94mxPU2We9a6xVqU7KzNSNRKvfFBJA5hY6tqqPmnrb6qYeCrXPc4OY17JF3BxLSNIcPs+4j1UTYajmIEc11Pw8whpYOm1wggcwZvfny6QSI0UGzoiICIiAiIgIiICIiAiIgIiICIiAiIgIiIC1riNj3UcBWcww5wDJ5+YwYHMxK2VYrePC+JSsA57TNLNdoqQQ17hzDZLo9EHK+0cC5uZzh5aZyu9anNn+WwJ62WKwrpdJW1cQWNp1Rg6RJbSAzTqX6kk8ze55kuWqhsGEi1lzVtqt44SbBbXxOeoLMGeORvYE9Jv7LR9m085s0vIIBk5aYJMAF3PkI58pU58KMLkZUc52Z8MbYENaIJhthb1AA0TWWV4pOeNnVW09TlnplDgTPpaPdc5/w7qOZzy0Fxs1pn37LqbbTQ+m5pGYEEFvURoudd6N2slR3hkxmgNdyvpPRTWo1w0qpqeIJeP8J+hXQ/Ch1Q4BviCCXOgTNhA/EFRJuju401A6q4loI8nInlI+Cp62K0NpgAAACABYAKys1CfFXZvg4qoALOioItY6+hgg+vqtBc2fX6KaeMmCzOouAl2V4j7zmiCY6kTMaxJixiGazINtFSKeHpRJ6aK3N3K8pOiQrSk2Sit13S3cGNORlQUsQ29E6NeRfK48j6687wV0NurVqHDMFUZarfJUER5m2mBa+tlBPCvF+Hi2B32XEMcek/ZdPIgjVdGAKD1ERAREQEREBERAREQEREBERAREQEREBERAVjtnHtoUnVHzABNmuPL/AAi3dXywu94JwtQDmIKDmPbdbxMRUqG7nOJJ9SSSrSjRBMnQXP6epKutu0jSrOBEeh1vorKnUJBBn2RaydPFeEJaG5yCWzdtNuma1y49QJMwIFjJHC7bVOgHMqvipUgl7yJm5awxZsBwMCwzxeJMTsfmcNdZvz6T+CvMGSC8GdCATOr5J+sD2CzSRNu9e91OgJzTabG2ih3bm+zqlTM1gJ6m9wbGPZSBu3gaeK2XVpVchdRFIhzoluVkHz8wSH/PotR2judD2+WLi/IrnL329E8XtOlbdHeWg5wztLHWJ6Wgf/Pwpk2XtBrmggyPRQ/s7h5WrVWsZ5GkjM/+lvMjqY5dYVTF7yu2dXNCjmqsY9zG5yMzg10T5bfQa+isvfTn5PHePVbTxW2kwuo0TIIDnh45OEEC1wbSCPa8REm3AMwfYFwJIEZSQYdEaHmRyzehKyG828FTFvqF5Ac0scxw5QRl7QS721WEx3mGYWuHAdCW3A7Q0d2ldI4SLdr7H0XlM2JHSfi6UmeU+oVzsrDFzmjqT+C00lvhZu65mIY97c1KpTzAnTqP9TfqBzU2LE7r0mtwtEARDANOgA/JZZQEREBERAREQEREBERAREQEREBERAREQEREBYXet38nKLlxAWaWv7TqipWDBfLc/kEHO+/uHDMW9ovp8m5Mq32Jg2VHsYXBpcQMx0HtK23jBs006ragEB0z1Jtc9ByA9Fo+wsSynVFSrJa06DVKkTdQ4dYJ9IWIdH22u59YuAsXjtwmspnzFxaPK7megy/uVu26uN8fDsq5Sxrh5WkgnKDAJiwmNAsjiWti+i58o3xqG6OMq7OcQHPBkzDZH2C0SOYBJIXziN8aJEOa0kABvhuq0RApkXawgE5/NMaWUlY/ZdOqCHMB9YErTNobttD3tDf5bmtaRM/ZcC0CbgA2t6rOz61v6qypb4l7azaAZSe9ph2ZznRlDYBcfLeXendRxiaBBjU8jbl9bD8FLlLdXD0wHBozW1N/3+qo4jduk6oamX7QuNNNCOhT2k/ES/2oaqPjP1IE+xH5LzN5Wj1APa8fVz/hTFX4fYVzS4Ayb6wou21s8Uar6N/KYk8xOq6y6wtaVPl++Sze6WC8XFtptiRMA6SOpGndYrDGYK2rhUwnaIP/ALdtLLSVP27mJJpim4Q5rRznl1WYWCwwyVmnk60LOqUgiIiiIiAiIgIiICIiAiIgIiICIiAiIgIiIMXvLthuEw76zuVmjq46BaZuPtR1YucZLnOJ7e6wPGjbpdVZhWmGs8zo5uP6BZzhRhAMP4lzOhPT0HJan4ZqlxX2X4uHLubRPx/yoJwtDM6DoNfkD8wuo9t4TxWObra3fl9YPsopbw+IdmB+8QfWDr7kArG4sb7w+dOCo9svaLELP4ttlj93sD4FMUxoL/Nz9ZWXdBssXtqLXC0bH6qz2hggQshRdBj1VWqApnStaZgSTHKy9xOGgtaNZHws4QAJVpg25iXnmYHYKYLLEYcCmZ5AyoA27WzVHEklwc8Am5LfuyfZTbxF2j4GDqkGCW5R7kD9VzrUrkyeZP6rfFle0anMclJ3BfZkvqV+Qho76n6FRfsvCuqOaxoJ5nsF0Rw92QMNhGNI8x8zu5C3ErZMWy2YWIusng62dgcrBwkQmx6gaTTJ00k6gq1IyyLwFeqNCIiAiIgIiICIiAiIgIiICIiAiIgIiIOb9/XmptCtJvnPwpX3TrMo4SmzNYASfVQxvljg/aVdw0FR30P9l947eSo6nTosJAAvBi51k+ivxn66FoVw8WVCpRF+8qMdw942UctHzOLj5nTYe55KT31BYjmudaiiKsL7NbRUHmNdJXy8RZY1pXdUuvXVzoVZ+N8r1lWf7qaqrjahynl+K9pVAxgA5AKjmHNfBflbJRGm8VqRqYYDk0l7+waYHzChDAYN9Vwa0EyYXQW28F4zC12jteyxux92aVItDWjy3Pf9wtTljL43L3SbRaHOEuiPkyf36KRaFhAWPoDLZXdFy3GV4HLHGqKtQUhdwPmjUBXgdf2WO3ZqD+MxDSLkNc0+kZT+C2jaqFINaGjkqiIo2IiICIiAiIgIiICIiAiIgIiICIiAqeIqZWOcdACfgSqi1/f3HeDgK7+eXKO5sg5p21UBrVHDm534lWLHECVTFXMT6oXeVUVsPjXsdnmINlJe6+/jnwyqZNgOyihhk9ls+5OxamIrtFw0akfJkrHJYn8PDh6EJX0BVTDYcNaB0EJVasC3qYa9tF8OocoVd1WLK1xOJPILNkaeUwbL7xrZAXuGvYqvUbZa4zpmsZlkR1/5X02nludVdspD4VAXKuMq9Fs3V0GwqdPQL3xdFRUJso8dvN4W2KYny/8Aif7n9Vv5fKhviHs3wsT4zTcnN7rpGfrotFi92Mb4+EoVTq6m0nvEFZRRsREQEREBERAREQEREBERAREQEREBR9xsrFuAgGJd82REHONE3X0Tr8oi0PMLcj1U8cL9llmHD3RLjI7Ii58lby5UKhRFmqt3lURCIsKqg3EL7rVICIukZqk50NKtgTIRErMXbn2VHPLuy8RIVXlR7xOokwYtF9ERdIykjhpRLdm4aTMszDsSSPpC2dEUbEREBERAREQf/9k=",
        alt:"Border Collie"
      }
    ]
  }

  // EVENTO DE CONSTRUCCIÓN/ INICIALIZACIÓN
  ngOnInit(): void{
  }
}
