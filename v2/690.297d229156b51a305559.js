(window.webpackJsonp=window.webpackJsonp||[]).push([[690],{Z7Qy:function(e,n,o){"use strict";o.r(n),n.default="import {Injectable} from '@angular/core';\nimport {TuiEditorAttachedFile} from '@taiga-ui/addon-editor';\nimport {BehaviorSubject, from, Observable} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\nimport {environment} from '../../../../../environments/environment';\n\n@Injectable({\n    providedIn: `root`,\n})\nexport class FileIoService {\n    readonly loading$ = new BehaviorSubject(false);\n\n    upload(file: File): Observable<TuiEditorAttachedFile> {\n        const {host, expires, autoDelete} = environment.fileIO;\n        const body = new FormData();\n\n        body.append(`file`, file, file.name);\n        body.append(`expires`, expires);\n        body.append(`autoDelete`, autoDelete);\n\n        return from(\n            fetch(host, {\n                method: `POST`,\n                body,\n            }).then(async (response: Response) => response.json()),\n        ).pipe(map(result => ({name: result.name, link: result.link})));\n    }\n}\n"}}]);