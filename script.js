

		window.addEventListener('DOMContentLoaded', () => {
		  <!-- if (window.location.pathname === '/m/' || window.location.pathname === '/m/index.php') { -->
			$('body').append(`
			  <div id="pop-up-container" onclick="close_pop_up()">
				<div id="bg-black" class="fade-in"></div>
	  
				<div id="pop-up-wrapper" class="swirl-in-fwd">
				  <img
					src="https://imgstorage.site/view/plotwis/dp-toto-popup1.png"
					alt="LINK DPTOTO"
				  />
	  
				  <div class="x-mark-container" onclick="close_pop_up()">X</div>
				</div>
			  </div>
			`);
	  
			setTimeout(close_pop_up, 5000);
	  
			document.getElementById('pop-up-wrapper').addEventListener('click', e => {
			  e.stopPropagation();
			});
		  <!-- } -->
		});
	  
		const close_pop_up = () => {
		  document.getElementById('pop-up-wrapper')?.classList.replace('swirl-in-fwd', 'swirl-out-bck');
		  document.getElementById('bg-black')?.classList.replace('fade-in', 'fade-out');
	  
		  setTimeout(() => {
			const pop_up_container = document.getElementById('pop-up-container');
			pop_up_container?.parentElement.removeChild(pop_up_container);
		  }, 1000);
		};
