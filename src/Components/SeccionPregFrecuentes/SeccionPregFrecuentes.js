import { AiOutlineCaretUp } from "react-icons/ai";


export const SeccionPregFrecuentes = () => {



    return (
        <section className="mx-auto px-20 bg-yellow-700 ">
	
			<div className="text-white text-center p-10">
                <h2 className="text-3xl font-bold mt-14">PREGUNTAS FRECUENTES</h2>
                <p className="text-xl font-semibold pb-2">
					Por si no quedó muy claro...
                </p>             
            </div>

			<div className="grid divide-y divide-gray-700 mx-auto pb-6">
				<div className="py-5">
					<details className="group">
						<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
							<span> No entendí nada. ¿Qué es un Escape Room?</span>
							<span className="transition group-open:rotate-180">
							<AiOutlineCaretUp />
							</span>
						</summary>
						<p className="text-white mt-3 group-open:animate-fadeIn italic text-justify pl-6">
							Tú y tus amigos estarán en una habitación decorada y ambientada en un tema 
							específico, donde deberán explorar el entorno, encontrar pistas, e ir 
							resolviendo los acertijos para poder avanzar. El objetivo de un escape 
							room es encontrar la forma de escapar de la habitación antes de que se 
							acabe el tiempo. Trabajar en equipo es clave; no podrán resolver física 
							ni mentalmente los desafíos si no se ayudan entre sí.
						</p>
					</details>
				</div>

				<div className="py-5">
					<details className="group">
						<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
							<span> ¿Y me van a encerrar?</span>
							<span className="transition group-open:rotate-180">
							<AiOutlineCaretUp />
							</span>
						</summary>
						<p className="text-white mt-3 group-open:animate-fadeIn italic text-justify pl-6">
							Sí y no. La puerta de salida se mantendrá sin llave para que puedas salir 
							en caso de cualquier emergencia. Además, durante todo el transcurso del 
							juego nuestro equipo monitoreará tu progreso a través de cámaras de seguridad 
							y te podrás comunicar con ellos usando Walkie-Talkies. Si lo deseas 
							podrás abandonar el juego cuando tú quieras.
						</p>
					</details>
				</div>

				<div className="py-5">
					<details className="group">
						<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
							<span> ¿Qué pasa si no puedo escapar?</span>
							<span className="transition group-open:rotate-180">
							<AiOutlineCaretUp />
							</span>
						</summary>
						<p className="text-white mt-3 group-open:animate-fadeIn italic text-justify pl-6">
							Te dejaremos salir igual. Lo prometemos.
						</p>
					</details>
				</div>

				<div className="py-5">
					<details className="group">
						<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
							<span> ¿Tengo que llevar algo?</span>
							<span className="transition group-open:rotate-180">
							<AiOutlineCaretUp />
							</span>
						</summary>
						<p className="text-white mt-3 group-open:animate-fadeIn italic text-justify pl-6">
							Nada. Sin embargo, te recomendamos traer la menor cantidad de efectos 
							personales para que estés más cómodo. De ser necesario podrás dejar 
							tus cosas con nosotros en recepción.
						</p>
					</details>
				</div>

				<div className="py-5">
					<details className="group">
						<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
							<span> ¿Cual es la edad minima?</span>
							<span className="transition group-open:rotate-180">
							<AiOutlineCaretUp />
							</span>
						</summary>
						<p className="text-white mt-3 group-open:animate-fadeIn italic text-justify pl-6">
							La edad mínima para participar es de 12 años, aunque menores sí pueden 
							venir si vienen acompañados de gente mayor. Sin embargo, es importante 
							mencionar que nuestras salas están más enfocadas en mayores de 12, por 
							la dificultad y siempre sera requisito la presencia de un mayor de edad
							y es a nombre de quien deben hacer la reserva.
						</p>
					</details>
				</div>

				<div className="py-5">
					<details className="group">
						<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
							<span> ¿Qué pasa si necesito cambiar mi reserva?</span>
							<span className="transition group-open:rotate-180">
							<AiOutlineCaretUp />
							</span>
						</summary>
						<p className="text-white mt-3 group-open:animate-fadeIn italic text-justify pl-6">
							Aceptamos cambios de hora hasta 48 horas antes de tu reserva. No es necesario 
							que nos digas por qué horario la quieres cambiar; podemos dejarla como “pendiente”
							hasta que nos avises del nuevo horario.
						</p>
					</details>
				</div>

				<div className="py-5">
					<details className="group">
						<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
							<span> ¿Qué pasa si llego tarde?</span>
							<span className="transition group-open:rotate-180">
							<AiOutlineCaretUp />
							</span>
						</summary>
						<p className="text-white mt-3 group-open:animate-fadeIn italic text-justify pl-6">
							Tu puntualidad es muy importante, por favor tómalo en cuenta al reservar. 
							Los horarios están definidos de tal forma de tener suficiente tiempo entre 
							grupos para preparar toda la experiencia para el grupo siguiente. Un atraso 
							podría ocasionar que cuentes con menos tiempo de juego. Lo mejor es que, 
							si vienes atrasado, nos avises para intentar de solucionar tu situación 
							y no perjudicar al que viene después que tú.
						</p>
					</details>
				</div>

				<div className="py-5">
					<details className="group">
						<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
							<span> ¿Se pueden agregar personas despues de comprar las entradas?</span>
							<span className="transition group-open:rotate-180">
							<AiOutlineCaretUp />
							</span>
						</summary>
						<p className="text-white mt-3 group-open:animate-fadeIn italic text-justify pl-6">
							Claro que si. Se puede pagar el adicional el dia de la actividad, 
							de igual manera recuerda que el numero maximo de participantes es 7,
							el participante extra despues de hecha la reserva, debe pagar 16.000.
						</p>
					</details>
				</div>

				<div className="py-5">
					<details className="group">
						<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
							<span> ¿Donde se encuentran ubicados?</span>
							<span className="transition group-open:rotate-180">
							<AiOutlineCaretUp />
							</span>
						</summary>
						<p className="text-white mt-3 group-open:animate-fadeIn italic text-justify pl-6">
							La dirección es San Diego 438, local 14, Santiago Centro. Estamos al lado 
							de los juegos Diana, el el piso -2, solo podras bajar a este nivel mostrando
							tu reserva.
						</p>
					</details>
				</div>
			</div>
        </section>
    )
}