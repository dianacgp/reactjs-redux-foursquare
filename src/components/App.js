import React, {Component} from 'react'
import Food from './suggestions/food';

export default class App extends Component {

	render() {
		
		return(
			<div className='container'>
				<div className='row'>
					<div className='col block-center'>
						<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
						  <li class="nav-item">
						    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Food</a>
						  </li>
						  <li class="nav-item">
						    <a class="nav-link" id="pills-coffee-tab" data-toggle="pill" href="#pills-coffee" role="tab" aria-controls="pills-coffee" aria-selected="false">Coffee</a>
						  </li>
						  <li class="nav-item">
						    <a class="nav-link" id="pills-drinks-tab" data-toggle="pill" href="#pills-drinks" role="tab" aria-controls="pills-drinks" aria-selected="false">Drinks</a>
						  </li>
						  <li class="nav-item">
						    <a class="nav-link" id="pills-shops-tab" data-toggle="pill" href="#pills-shops" role="tab" aria-controls="pills-home" aria-selected="true">Shops</a>
						  </li>
						  <li class="nav-item">
						    <a class="nav-link" id="pills-arts-tab" data-toggle="pill" href="#pills-arts" role="tab" aria-controls="pills-coffee" aria-selected="false">Arts</a>
						  </li>
						</ul>
						<div class="tab-content" id="pills-tabContent">
						  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
						  	<Food/>
						  </div>
						  <div class="tab-pane fade" id="pills-coffee" role="tabpanel" aria-labelledby="pills-coffee-tab">Coffee</div>
						  <div class="tab-pane fade" id="pills-drinks" role="tabpanel" aria-labelledby="pills-drinks-tab">Drinks</div>
						  <div class="tab-pane fade" id="pills-shops" role="tabpanel" aria-labelledby="pills-shops-tab">Shops</div>
						  <div class="tab-pane fade" id="pills-arts" role="tabpanel" aria-labelledby="pills-arts-tab">Arts</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


