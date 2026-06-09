import http from 'k6/http';
import { check, randomSeed, sleep } from 'k6';

export const options = {
    scenarios: {
        consultaParticipantes: {
            executor: 'constant-vus',
            exec: 'participantes',
            vus: 1,
            duration: '1s',
        },
        
        ParticipanteId: {
            executor: 'constant-vus',
            exec: 'participanteId',
            vus: 1,
            duration: '1s',
        },

        ParticipanteCod: {
            executor: 'constant-vus',
            exec: 'participanteCod',
            vus: 1,
            duration: '1s',
        },
        pagoIdentificador: {
            executor: 'constant-vus',
            exec: 'pagoIdentificador',
            vus: 1,
            duration: '1s',
        }
    },
};

const base_URL = 'https://maryann-uncommingled-ballistically.ngrok-free.dev/api/v1';
//const base_URL = 'http://192.168.1.6:5045/api/';

export function setup() {

    const payload = JSON.stringify({
            "nombreUsuario": "ADMIN",
            "password": "Admin2026!*"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const loginresponse = http.post( `${base_URL}/auth/login`, payload, params);

    const tiempo = loginresponse.timings.duration;

    check(loginresponse, {
        [`login successful (${tiempo} ms)`]: (r) => r.status === 200,
         //'login devuelve accessToken': (r) => r.json('accessToken') !== undefined,
    });

    //console.log("Hola Ingreso Setup")
    const Token = loginresponse.json('accessToken');
    //console.log (Token)
    return { Token };
}

//***********02 - PARTICIIPANTES**************
export function participantes(data) {

    const params = {
        headers: {
            Authorization: `Bearer ${data.Token}`,
            'Content-Type': 'application/json',
        }, 
    };

    const response = http.get(`${base_URL}/participantes`, params);
    
    const tiempo = response.timings.duration;console.log('PARTICIPANTES: '+response.body);

    check(response, {
        [`Participantes successful (${tiempo} ms)`]: (r) => r.status === 200,
    });

    sleep(1);
}

export function participanteId(data) {

    const params = {
        headers: {
            Authorization: `Bearer ${data.Token}`,
            'Content-Type': 'application/json',
        }, 
    };

    // 1. Obtener lista de participantes
    const responseParticipantes = http.get(
        `${base_URL}/participantes`,
        params
    );

    const body = responseParticipantes.json();

    // 2. Recorrer participantes
    for (let i = 0; i < body.length; i++) {

        const id = body[i].id;

        console.log(`ID: ${id}`);
        console.log(`Código: ${body[i].codigo}`);
        console.log(`Nombre: ${body[i].nombre}`);
        console.log(`Tipo: ${body[i].tipo}`);
        console.log(`CodPais: ${body[i].codigoPais}`);
        console.log(`Estado: ${body[i].estado}`);

        // 3. Consumir endpoint por ID
        const response = http.get(
            `${base_URL}/participantes/${id}`,
            params
        );
        const tiempo = response.timings.duration;console.log('PARTICIPANTES: '+response.body);

        check(response, {
            [`Participantes ID successful (${tiempo} ms)`]: (r) => r.status === 200,
        });
    }

    sleep(1);
}

export function participanteCod(data) {

    const params = {
        headers: {
            Authorization: `Bearer ${data.Token}`,
            'Content-Type': 'application/json',
        }, 
    };

    // 1. Obtener lista de participantes
    const responseParticipantes = http.get(
        `${base_URL}/participantes`,
        params
    );

    const body = responseParticipantes.json();

    // 2. Recorrer participantes
    for (let i = 0; i < body.length; i++) {

        const cod = body[i].codigo;

        console.log(`Código: ${cod}`);
        console.log(`ID: ${body[i].id}`);
        console.log(`Nombre: ${body[i].nombre}`);
        console.log(`Tipo: ${body[i].tipo}`);
        console.log(`CodPais: ${body[i].codigoPais}`);
        console.log(`Estado: ${body[i].estado}`);

        // 3. Consumir endpoint por ID
        const response = http.get(
            `${base_URL}/participantes/codigos/${cod}`,
            params
        );

        const tiempo = response.timings.duration;console.log('PARTICIPANTES: '+response.body);

        check(response, {
            [`Participantes Código successful (${tiempo} ms)`]: (r) => r.status === 200,
        });
    }

    sleep(1);
}

export function pagoIdentificador(data) {

    const params = {
        headers: {
            Authorization: `Bearer ${data.Token}`,
            'Content-Type': 'application/json',
        }, 
    };

    // 1. Obtener lista de participantes
    const responseParticipantes = http.get(
        `${base_URL}/pagos?`,
        params
    );

    const body = responseParticipantes.json();

    // 2. Recorrer participantes
    for (let i = 0; i < body.length; i++) {

        const id = body[i].identificadorTransaccion;


        console.log(`Identificador de Transacción: ${body[i].identificadorTransaccion}`);
        console.log(`ID: ${id}`);
        console.log(`Identificador de Origen: ${body[i].identificadorOrigen}`);
        console.log(`Llave de Idempotencia: ${body[i].llaveIdempotencia}`);
        console.log(`ID de Correlación: ${body[i].idCorrelacion}`);
        console.log(`ID de Participante Ordenante: ${body[i].idParticipanteOrdenante}`);
        console.log(`ID de Participante Receptor: ${body[i].idParticipanteReceptor}`);
        console.log(`Monto: ${body[i].monto}`);
        console.log(`Código de Moneda: ${body[i].codigoMoneda}`);
        console.log(`ID de Estado de Transacción: ${body[i].idEstadoTransaccion}`);
        console.log(`Estado: ${body[i].estado}`);
        console.log(`Código de Respuesta: ${body[i].codigoRespuesta}`);
        console.log(`Descripción de Respuesta: ${body[i].descripcionRespuesta}`);
        console.log(`Fecha de Creación: ${body[i].fechaCreacion}`);
        console.log(`Fecha de Actualización: ${body[i].fechaActualizacion}`);

        // 3. Consumir endpoint por ID
        const response = http.get(
            `${base_URL}//pagos/identificadores/${identificadorTransaccion}`,
            params
        );
        const tiempo = response.timings.duration;console.log('PARTICIPANTES: '+response.body);

        check(response, {
            [`Pago Identificador successful (${tiempo} ms)`]: (r) => r.status === 200,
        });
    }

    sleep(1);
}

export function parametrosParticipante(data) {

    const params = {
        headers: {
            Authorization: `Bearer ${data.Token}`,
            'Content-Type': 'application/json',
        }, 
    };

    // 1. Obtener lista de participantes
    const responseParticipantes = http.get(
        `${base_URL}/pagos?`,
        params
    );

    const body = responseParticipantes.json();

    // 2. Recorrer participantes
    for (let i = 0; i < body.length; i++) {

        const id = body[i].identificadorTransaccion;


        console.log(`Identificador de Transacción: ${body[i].identificadorTransaccion}`);
        console.log(`ID: ${id}`);
        console.log(`Identificador de Origen: ${body[i].identificadorOrigen}`);
        console.log(`Llave de Idempotencia: ${body[i].llaveIdempotencia}`);
        console.log(`ID de Correlación: ${body[i].idCorrelacion}`);
        console.log(`ID de Participante Ordenante: ${body[i].idParticipanteOrdenante}`);
        console.log(`ID de Participante Receptor: ${body[i].idParticipanteReceptor}`);
        console.log(`Monto: ${body[i].monto}`);
        console.log(`Código de Moneda: ${body[i].codigoMoneda}`);
        console.log(`ID de Estado de Transacción: ${body[i].idEstadoTransaccion}`);
        console.log(`Estado: ${body[i].estado}`);
        console.log(`Código de Respuesta: ${body[i].codigoRespuesta}`);
        console.log(`Descripción de Respuesta: ${body[i].descripcionRespuesta}`);
        console.log(`Fecha de Creación: ${body[i].fechaCreacion}`);
        console.log(`Fecha de Actualización: ${body[i].fechaActualizacion}`);

        // 3. Consumir endpoint por ID
        const response = http.get(
            `${base_URL}//pagos/identificadores/${identificadorTransaccion}`,
            params
        );
        const tiempo = response.timings.duration;console.log('PARTICIPANTES: '+response.body);

        check(response, {
            [`Pago Identificador successful (${tiempo} ms)`]: (r) => r.status === 200,
        });
    }

    sleep(1);
}




