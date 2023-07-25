import { Fade, Flip, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";

const Gallery = () => {
	return (
		<div className="lg:mx-20">
			<div className="text-3xl font-serif font-bold  text-center my-10 space-y-3">
				<h1 className="text-cyan-500">Memorable Moments!</h1>
				<p className="text-xl font-normal">
					Moments Unfold, Memories Forever Treasured{" "}
				</p>
			</div>
			<Rotate>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					<div className="grid gap-4">
						<div>
							<Flip>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1430669310/photo/graduates-tossing-caps-in-the-air.jpg?s=612x612&w=0&k=20&c=ijTSNTwqXg8iDSDc5g-zDva_MtiekyXQt139gYouGcc="
									alt=""
								/>
							</Flip>
						</div>
						<div>
							<Roll>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1386452720/photo/graduating-students-hands-throwing-graduation-caps-in-the-air.jpg?s=612x612&w=0&k=20&c=r2fkxOAYako_hWHPNbMZRNVdz84EsdILzL1ieVbIVWs="
									alt=""
								/>
							</Roll>
						</div>
						<div>
							<Rotate>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1488374745/photo/happy-graduated-girl-hugging-her-father-while-looking-at-her-diploma-on-her-graduation-day.jpg?s=612x612&w=0&k=20&c=NsHLF27agoZLcFYxsULUlJQyBiF6r1dtjPFn3a-YuMI="
									alt=""
								/>
							</Rotate>
						</div>
					</div>
					<div className="grid gap-4">
						<div>
							<Zoom>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1496195459/photo/young-graduates-throwing-their-mortarboard-in-the-air-while-celebrating-on-graduation.jpg?s=612x612&w=0&k=20&c=-GwKMY9ovlH_Y2SjnWqqUSUhEq1pDcWk2IF0ti5_odc="
									alt=""
								/>
							</Zoom>
						</div>
						<div>
							<Flip>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/896458302/photo/young-man-graduating-from-high-school-or-university.jpg?s=612x612&w=0&k=20&c=SWU6I2qhxtgX34GDVfeWLyvtgVXxW58wftXNe5KRJJI="
									alt=""
								/>
							</Flip>
						</div>
						<div>
							<Fade>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/169947703/photo/excited-group-of-college-graduates-throwing-their-hats-in-celebration.jpg?s=612x612&w=0&k=20&c=Px-UXfULhaBB0fXDsH_xu7xdEGYiUhoMPBuo7QwY9cI="
									alt=""
								/>
							</Fade>
						</div>
					</div>
					<div className="grid gap-4">
						<div>
							<Flip>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1485348948/photo/beautiful-multiracial-female-students-just-graduated-at-graduation-with-diplomas-take-a-photo.jpg?s=612x612&w=0&k=20&c=9Xt2hZU9HXoBWrNG-PCZ3RG2qqOmSVQr-shpxHye9ic="
									alt=""
								/>
							</Flip>
						</div>
						<div>
							<Slide>
								<img
									className="max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/486234770/photo/girl-in-bachelor-gown.jpg?s=612x612&w=0&k=20&c=uM5oU0oUhWuneFC1IJhSNDClm1i6-hP31fSSlBacNh8="
									alt=""
								/>
							</Slide>
						</div>
						<div>
							<Zoom>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/907837926/photo/latin-descent-female-college-student-graduation-on-campus.jpg?s=612x612&w=0&k=20&c=hnhk6S4r1BAP3mq6SOVlCi4WkOGys1XwSbLONrUywZU="
									alt=""
								/>
							</Zoom>
						</div>
					</div>
					<div className="grid gap-4">
						<div>
							<Rotate>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1064204598/photo/group-of-graduates-during-commencement-concept-education-congratulation-in-university.jpg?s=612x612&w=0&k=20&c=LQfEW0TZDqLihmCRBeu94XHNMkZcyOzkD4zCQk8VG90="
									alt=""
								/>
							</Rotate>
						</div>
						<div>
							<Flip>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1500213837/photo/happy-female-college-graduate.jpg?s=612x612&w=0&k=20&c=xrna9c4sG-8567H8h-KaNO_eNNlGXyc3cM1h1mLGy50="
									alt=""
								/>
							</Flip>
						</div>
						<div>
							<Rotate>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1349878840/photo/proud-father-arranging-the-mortarboar-of-her-graduating-daughter.jpg?s=612x612&w=0&k=20&c=QNWM35eGnfz6j-CTbYlAF3Olch3r3F53O7ZlZDk7NAI="
									alt=""
								/>
							</Rotate>
						</div>
					</div>
				</div>
			</Rotate>
		</div>
	);
};

export default Gallery;
