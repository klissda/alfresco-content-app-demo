import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@alfresco/adf-core';

import { ExtensionService, provideExtensionConfig } from '@alfresco/adf-extensions';
import { CoreModule, TRANSLATION_PROVIDER } from '@alfresco/adf-core';

import { MyExtensionComponent } from './my-extension.component';
import { MyExtensionService } from './my-extension.service';

export function components() {
    return [MyExtensionComponent];
}

@NgModule({
    imports: [CoreModule, BrowserModule, FormsModule, MaterialModule],
    providers: [
        {
            provide: TRANSLATION_PROVIDER,
            multi: true,
            useValue: {
                name: 'adf-my-extension',
                source: 'assets/adf-my-extension',
            },
        },
        MyExtensionService,
        provideExtensionConfig(['my-extension.json']),
    ],
    declarations: components(),
    exports: components(),
})
export class MyExtensionModule {
    constructor(extensions: ExtensionService, myService: MyExtensionService) {
        extensions.setComponents({
          'my-extension.main.component' : MyExtensionComponent,
        });
        extensions.setEvaluators({
           'my-extension.disabled': () => !myService.mySmartViewerEnabled(),
        });
    }
}
