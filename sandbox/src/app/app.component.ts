import {Component, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {DocsComponent} from "./docs/docs.component";
import {DocsNavigationComponent} from "./docs-navigation/docs-navigation.component";
import {Router} from '@angular/router';
import {H21SidebarComponent} from "../../projects/h21-be-ui-kit/src/lib/h21-sidebar/h21-sidebar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [MatIconRegistry],
})

export class AppComponent {
	@ViewChild(DocsNavigationComponent) private docsNavigation: DocsNavigationComponent;
	@ViewChild(DocsComponent) private docs: DocsComponent;
	@ViewChild(H21SidebarComponent) private sidebar: H21SidebarComponent;

	constructor(iconReg: MatIconRegistry, sanitizer: DomSanitizer, public router: Router) {
		iconReg.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/horse21-logo.svg'));
		iconReg.addSvgIcon(
			'h21_flight_land_blue',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/h21-flight-land-blue-icon.svg')
		);
		iconReg.addSvgIcon(
			'h21_flight_land_green',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/h21-flight-land-green-icon.svg')
		);
		iconReg.addSvgIcon('h21_flight_land_red', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/h21-flight-land-red-icon.svg'));
		iconReg.addSvgIcon(
			'h21_flight_takeoff_blue',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/h21-flight-takeoff-blue-icon.svg')
		);
		iconReg.addSvgIcon(
			'h21_flight_takeoff_green',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/h21-flight-takeoff-green-icon.svg')
		);
		iconReg.addSvgIcon(
			'h21_flight_takeoff_red',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/h21-flight-takeoff-red-icon.svg')
		);
		// h21 icons
		// iconReg.addSvgIcon('h21_baggage', sanitizer.bypassSecurityTrustResourceUrl('./assets/h21-icons/h21-baggage-blue.svg'));
		// iconReg.addSvgIcon('h21_no_baggage', sanitizer.bypassSecurityTrustResourceUrl('./assets/h21-icons/h21-no-baggage-gray.svg'));
		// iconReg.addSvgIcon('h21_luggage', sanitizer.bypassSecurityTrustResourceUrl('./assets/h21-icons/h21-luggage-blue.svg'));
		// iconReg.addSvgIcon('h21_no_luggage', sanitizer.bypassSecurityTrustResourceUrl('./assets/h21-icons/h21-no-luggage-gray.svg'));
		// iconReg.addSvgIcon('h21_night', sanitizer.bypassSecurityTrustResourceUrl('./assets/h21-icons/h21-night-blue.svg'));
		iconReg.addSvgIcon('h21_baggage', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/h21-baggage-blue.svg'));
		iconReg.addSvgIcon('h21_no_baggage', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/h21-no-baggage-gray.svg'));
		iconReg.addSvgIcon('h21_luggage', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/h21-luggage-blue.svg'));
		iconReg.addSvgIcon('h21_no_luggage', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/h21-no-luggage-gray.svg'));
		iconReg.addSvgIcon('h21_night', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/h21-night-blue.svg'));
	}

	ngOnInit() {
		if (this.docsNavigation) {
			this.subscription = this.docsNavigation.getEmitter()
				.subscribe(item => this.docs.changeComponent(item));
		}
	}

	title = 'Horse 21 Pro';
	subscription: any;

	isDemo(): boolean {
		return this.router.url.indexOf('/demo') == 0;
	}

	showSidebar(): void {
		this.sidebar.visibiltyToggle();
	}

	changeComponent(event): void {
		this.docs.changeComponent(event);
	}
}
