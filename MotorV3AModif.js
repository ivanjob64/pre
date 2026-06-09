import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    scenarios: {
        authLogin: {
            executor: 'constant-vus',
            exec: 'login',
            vus: 1,
            duration: '1s',
        },
        authMe: {
            executor: 'constant-vus',
            exec: 'me',
            vus: 1,
            duration: '1s',
        },
        health: {
            executor: 'constant-vus',
            exec: 'health',
            vus: 1,
            duration: '1s',
        },
        healthDatabase: {
            executor: 'constant-vus',
            exec: 'healthDatabase',
            vus: 1,
            duration: '1s',
        },

        consultaParticipantes: {
            executor: 'constant-vus',
            exec: 'participantes',
            vus: 1,
            duration: '1s',
        },
        crearParticipante: {
            executor: 'constant-vus',
            exec: 'crearParticipante',
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
        parametrosParticipante: {
            executor: 'constant-vus',
            exec: 'parametrosParticipante',
            vus: 1,
            duration: '1s',
        },

        crearPago: {
            executor: 'constant-vus',
            exec: 'crearPago',
            vus: 1,
            duration: '1s',
        },
        listarPagos: {
            executor: 'constant-vus',
            exec: 'listarPagos',
            vus: 1,
            duration: '1s',
        },
        pagoId: {
            executor: 'constant-vus',
            exec: 'pagoId',
            vus: 1,
            duration: '1s',
        },
        pagoIdentificador: {
            executor: 'constant-vus',
            exec: 'pagoIdentificador',
            vus: 1,
            duration: '1s',
        },
        estadoPago: {
            executor: 'constant-vus',
            exec: 'estadoPago',
            vus: 1,
            duration: '1s',
        },
        rechazarPago: {
            executor: 'constant-vus',
            exec: 'rechazarPago',
            vus: 1,
            duration: '1s',
        },
        reversarPago: {
            executor: 'constant-vus',
            exec: 'reversarPago',
            vus: 1,
            duration: '1s',
        },

        crearPagoRtp: {
            executor: 'constant-vus',
            exec: 'crearPagoRtp',
            vus: 1,
            duration: '1s',
        },
        consultarPagoRtp: {
            executor: 'constant-vus',
            exec: 'consultarPagoRtp',
            vus: 1,
            duration: '1s',
        },

        listarTransacciones: {
            executor: 'constant-vus',
            exec: 'listarTransacciones',
            vus: 1,
            duration: '1s',
        },
        crearTransaccion: {
            executor: 'constant-vus',
            exec: 'crearTransaccion',
            vus: 1,
            duration: '1s',
        },
        consultarTransaccion: {
            executor: 'constant-vus',
            exec: 'consultarTransaccion',
            vus: 1,
            duration: '1s',
        },
        estadoTransaccion: {
            executor: 'constant-vus',
            exec: 'estadoTransaccion',
            vus: 1,
            duration: '1s',
        },
        trazabilidadTransaccion: {
            executor: 'constant-vus',
            exec: 'trazabilidadTransaccion',
            vus: 1,
            duration: '1s',
        },
        validarTransaccion: {
            executor: 'constant-vus',
            exec: 'validarTransaccion',
            vus: 1,
            duration: '1s',
        },
        procesarTransaccion: {
            executor: 'constant-vus',
            exec: 'procesarTransaccion',
            vus: 1,
            duration: '1s',
        },
        compensarTransaccion: {
            executor: 'constant-vus',
            exec: 'compensarTransaccion',
            vus: 1,
            duration: '1s',
        },
        liquidarTransaccion: {
            executor: 'constant-vus',
            exec: 'liquidarTransaccion',
            vus: 1,
            duration: '1s',
        },
        rechazarTransaccion: {
            executor: 'constant-vus',
            exec: 'rechazarTransaccion',
            vus: 1,
            duration: '1s',
        },
        fallarTransaccion: {
            executor: 'constant-vus',
            exec: 'fallarTransaccion',
            vus: 1,
            duration: '1s',
        },

        crearCiclo: {
            executor: 'constant-vus',
            exec: 'crearCiclo',
            vus: 1,
            duration: '1s',
        },
        listarCiclos: {
            executor: 'constant-vus',
            exec: 'listarCiclos',
            vus: 1,
            duration: '1s',
        },
        consultarCiclo: {
            executor: 'constant-vus',
            exec: 'consultarCiclo',
            vus: 1,
            duration: '1s',
        },
        procesarCiclo: {
            executor: 'constant-vus',
            exec: 'procesarCiclo',
            vus: 1,
            duration: '1s',
        },
        cerrarCiclo: {
            executor: 'constant-vus',
            exec: 'cerrarCiclo',
            vus: 1,
            duration: '1s',
        },
        reabrirCiclo: {
            executor: 'constant-vus',
            exec: 'reabrirCiclo',
            vus: 1,
            duration: '1s',
        },

        crearInstruccionLiquidacion: {
            executor: 'constant-vus',
            exec: 'crearInstruccionLiquidacion',
            vus: 1,
            duration: '1s',
        },
        listarSesionesLiquidacion: {
            executor: 'constant-vus',
            exec: 'listarSesionesLiquidacion',
            vus: 1,
            duration: '1s',
        },
        consultarInstruccionLiquidacion: {
            executor: 'constant-vus',
            exec: 'consultarInstruccionLiquidacion',
            vus: 1,
            duration: '1s',
        },

        listarEjecucionesConciliacion: {
            executor: 'constant-vus',
            exec: 'listarEjecucionesConciliacion',
            vus: 1,
            duration: '1s',
        },
        listarReglasCumplimiento: {
            executor: 'constant-vus',
            exec: 'listarReglasCumplimiento',
            vus: 1,
            duration: '1s',
        },
        limitesCumplimientoParticipante: {
            executor: 'constant-vus',
            exec: 'limitesCumplimientoParticipante',
            vus: 1,
            duration: '1s',
        },
        listarAlertasOperaciones: {
            executor: 'constant-vus',
            exec: 'listarAlertasOperaciones',
            vus: 1,
            duration: '1s',
        },
    },
};

const base_URL = (__ENV.BASE_URL || 'https://maryann-uncommingled-ballistically.ngrok-free.dev/api/v1').replace(/\/$/, '');
const MAX_ITEMS = Number(__ENV.MAX_ITEMS || 5);

const defaults = {
    participanteId: Number(__ENV.PARTICIPANTE_ID || 1),
    codigoParticipante: __ENV.CODIGO_PARTICIPANTE || 'BANCOA',
    pagoId: Number(__ENV.PAGO_ID || 1),
    identificadorPago: __ENV.IDENTIFICADOR_PAGO || 'PAY-DEMO',
    identificadorRtp: __ENV.IDENTIFICADOR_RTP || 'RTP-DEMO',
    cicloId: Number(__ENV.CICLO_ID || 1),
    liquidacionId: Number(__ENV.LIQUIDACION_ID || 1),
};

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

function jsonParams() {
    return {
        headers: {
            'Content-Type': 'application/json',
        },
    };
}

function authParams(data) {
    return {
        headers: {
            Authorization: `Bearer ${data.Token}`,
            'Content-Type': 'application/json',
        },
    };
}

function getToken(response) {
    const body = parseBody(response, {});
    return body.accessToken || body.token || body.access_token || '';
}

function parseBody(response, fallback) {
    try {
        return response.json();
    } catch (error) {
        console.warn(`No se pudo parsear JSON. Status: ${response.status}. Body: ${response.body}`);
        return fallback;
    }
}

function asArray(body) {
    if (Array.isArray(body)) return body;
    if (Array.isArray(body.items)) return body.items;
    if (Array.isArray(body.data)) return body.data;
    if (Array.isArray(body.resultado)) return body.resultado;
    if (Array.isArray(body.resultados)) return body.resultados;
    if (Array.isArray(body.value)) return body.value;
    return [];
}

function checkResponse(response, label, expectedStatuses = [200]) {
    const tiempo = response.timings.duration;

    check(response, {
        [`${label} successful (${tiempo} ms)`]: (r) => expectedStatuses.includes(r.status),
    });
}

function getJson(url, params, label, expectedStatuses = [200]) {
    const response = http.get(url, params);
    checkResponse(response, label, expectedStatuses);
    console.log(`${label}: ${response.body}`);
    return response;
}

function postJson(url, payload, params, label, expectedStatuses = [200, 201]) {
    const response = http.post(url, payload === null ? null : JSON.stringify(payload), params);
    checkResponse(response, label, expectedStatuses);
    console.log(`${label}: ${response.body}`);
    return response;
}

function timestamp() {
    return `${Date.now()}-${__VU}-${__ITER}`;
}

function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
        const value = Math.floor(Math.random() * 16);
        const hex = char === 'x' ? value : (value & 0x3) | 0x8;
        return hex.toString(16);
    });
}

function takeItems(items) {
    return items.slice(0, MAX_ITEMS);
}

function participanteDesdeListado(data) {
    const response = getJson(`${base_URL}/participantes`, authParams(data), 'Listar participantes');
    const participante = asArray(parseBody(response, [])).find((item) => item.id || item.codigo) || {};

    return {
        id: participante.id || data.participanteId,
        codigo: participante.codigo || data.codigoParticipante,
    };
}

function pagoDesdeListado(data) {
    const response = getJson(`${base_URL}/pagos?top=50`, authParams(data), 'Listar pagos');
    const pago = asArray(parseBody(response, [])).find((item) => item.id || item.identificadorTransaccion) || {};

    return {
        id: pago.id || data.pagoId,
        identificador: pago.identificadorTransaccion || data.identificadorPago,
    };
}

function transaccionDesdeListado(data) {
    const response = getJson(`${base_URL}/transacciones?top=50`, authParams(data), 'Listar transacciones');
    const transaccion = asArray(parseBody(response, [])).find((item) => item.identificadorTransaccion) || {};

    return {
        identificador: transaccion.identificadorTransaccion || data.identificadorPago,
    };
}

function cicloDesdeListado(data) {
    const response = getJson(`${base_URL}/compensaciones/ciclos?top=50`, authParams(data), 'Listar ciclos');
    const ciclo = asArray(parseBody(response, [])).find((item) => item.id || item.idCiclo || item.cicloId) || {};

    return {
        id: ciclo.id || ciclo.idCiclo || ciclo.cicloId || data.cicloId,
    };
}

function crearPagoBase(data, prefix = 'PAY') {
    const id = `${prefix}-${timestamp()}`;
    const payload = {
        identificadorTransaccion: id,
        identificadorOrigen: `ORIG-${timestamp()}`,
        llaveIdempotencia: `IDEMP-${guid()}`,
        idCorrelacion: `CORR-${guid()}`,
        idParticipanteOrdenante: 1,
        idParticipanteReceptor: 2,
        idParticipanteProcesador: 1,
        idTipoOperacion: 1,
        idCanalOperacion: 1,
        idClienteOrdenante: 1,
        idCuentaOrdenante: 1,
        idClienteBeneficiario: 2,
        idCuentaBeneficiario: 2,
        monto: 150.75,
        codigoMoneda: 'BOB',
        esTiempoReal: prefix === 'RTP',
        requiereCompensacion: prefix !== 'RTP',
        requiereLiquidacion: true,
        concepto: prefix === 'RTP' ? 'Pago inmediato RTP demo' : 'Pago demo ACCL',
        referencia: 'REF-PRUEBA',
    };

    const path = prefix === 'RTP' ? '/rtp/pagos' : '/pagos';
    const response = postJson(`${base_URL}${path}`, payload, authParams(data), prefix === 'RTP' ? 'Crear pago RTP' : 'Crear pago');
    const body = parseBody(response, {});

    return {
        response,
        identificador: body.identificadorTransaccion || payload.identificadorTransaccion,
        id: body.id || body.pagoId || data.pagoId,
    };
}

function crearTransaccionBase(data) {
    const id = `PAY-${timestamp()}`;
    const payload = {
        identificadorTransaccion: id,
        identificadorOrigen: `ORIG-${timestamp()}`,
        llaveIdempotencia: `IDEMP-${guid()}`,
        idCorrelacion: `CORR-${guid()}`,
        idParticipanteOrdenante: 1,
        idParticipanteReceptor: 2,
        idParticipanteProcesador: 1,
        idTipoOperacion: 1,
        idCanalOperacion: 1,
        idClienteOrdenante: 1,
        idCuentaOrdenante: 1,
        idClienteBeneficiario: 2,
        idCuentaBeneficiario: 2,
        monto: 150.75,
        codigoMoneda: 'BOB',
        esTiempoReal: false,
        requiereCompensacion: true,
        requiereLiquidacion: true,
        concepto: 'Pago demo ACCL',
        referencia: 'REF-PRUEBA',
    };

    const response = postJson(`${base_URL}/transacciones`, payload, authParams(data), 'Crear transaccion');
    const body = parseBody(response, {});

    return {
        response,
        identificador: body.identificadorTransaccion || payload.identificadorTransaccion,
    };
}

function crearCicloBase(data) {
    const payload = {
        codigoCiclo: `CICLO-${timestamp()}`,
        fechaNegocio: __ENV.FECHA_NEGOCIO || '2026-05-21',
        idTipoOperacion: 1,
    };

    const response = postJson(`${base_URL}/compensaciones/ciclos`, payload, authParams(data), 'Crear ciclo');
    const body = parseBody(response, {});

    return {
        response,
        id: body.id || body.idCiclo || body.cicloId || data.cicloId,
    };
}

function crearLiquidacionBase(data) {
    const payload = {
        codigoSesionLiquidacion: `LIQ-${timestamp()}`,
        fechaNegocio: __ENV.FECHA_NEGOCIO || '2026-05-21',
        idMetodoLiquidacion: 1,
        codigoMoneda: 'BOB',
    };

    const response = postJson(`${base_URL}/liquidaciones/instrucciones`, payload, authParams(data), 'Crear instruccion liquidacion');
    const body = parseBody(response, {});

    return {
        response,
        id: body.id || body.idLiquidacion || body.liquidacionId || data.liquidacionId,
    };
}

export function login() {
    const payload = {
        nombreUsuario: __ENV.USERNAME || 'ADMIN',
        password: __ENV.PASSWORD || 'Admin2026!*',
    };

    postJson(`${base_URL}/auth/login`, payload, jsonParams(), 'Login', [200]);
    sleep(1);
}

export function me(data) {
    getJson(`${base_URL}/auth/me`, authParams(data), 'Me');
    sleep(1);
}

export function health() {
    getJson(`${base_URL}/health`, jsonParams(), 'Health');
    sleep(1);
}

export function healthDatabase() {
    getJson(`${base_URL}/health/database`, jsonParams(), 'Health Database');
    sleep(1);
}

export function participantes(data) {
    getJson(`${base_URL}/participantes`, authParams(data), 'Participantes');
    sleep(1);
}

export function crearParticipante(data) {
    const payload = {
        codigo: `BTEST${timestamp()}`,
        nombre: 'Banco Test Automatizado',
        tipo: 'DIRECTO',
        codigoPais: 'BO',
    };

    postJson(`${base_URL}/participantes`, payload, authParams(data), 'Crear participante');
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

    check(responseParticipantes, {
        'Listar participantes successful': (r) => r.status === 200,
    });

    const body = asArray(parseBody(responseParticipantes, []));
    const participantes = takeItems(body);

    // 2. Recorrer participantes
    for (let i = 0; i < participantes.length; i++) {
        const id = participantes[i].id;

        console.log(`ID: ${id}`);
        console.log(`Código: ${participantes[i].codigo}`);
        console.log(`Nombre: ${participantes[i].nombre}`);
        console.log(`Tipo: ${participantes[i].tipo}`);
        console.log(`CodPais: ${participantes[i].codigoPais}`);
        console.log(`Estado: ${participantes[i].estado}`);

        // 3. Consumir endpoint por ID
        const response = http.get(
            `${base_URL}/participantes/${id}`,
            params
        );

        const tiempo = response.timings.duration;
        console.log('PARTICIPANTES: ' + response.body);

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

    check(responseParticipantes, {
        'Listar participantes successful': (r) => r.status === 200,
    });

    const body = asArray(parseBody(responseParticipantes, []));
    const participantes = takeItems(body);

    // 2. Recorrer participantes
    for (let i = 0; i < participantes.length; i++) {
        const codigo = participantes[i].codigo;

        console.log(`Código: ${codigo}`);
        console.log(`ID: ${participantes[i].id}`);
        console.log(`Nombre: ${participantes[i].nombre}`);
        console.log(`Tipo: ${participantes[i].tipo}`);
        console.log(`CodPais: ${participantes[i].codigoPais}`);
        console.log(`Estado: ${participantes[i].estado}`);

        // 3. Consumir endpoint por codigo
        const response = http.get(
            `${base_URL}/participantes/codigos/${codigo}`,
            params
        );

        const tiempo = response.timings.duration;
        console.log('PARTICIPANTES: ' + response.body);

        check(response, {
            [`Participantes Código successful (${tiempo} ms)`]: (r) => r.status === 200,
        });
    }

    sleep(1);
}

export function parametrosParticipante(data) {
    const participante = participanteDesdeListado(data);
    getJson(`${base_URL}/participantes/parametros/${participante.id}`, authParams(data), `Parametros participante ${participante.id}`);
    sleep(1);
}

export function crearPago(data) {
    crearPagoBase(data);
    sleep(1);
}

export function listarPagos(data) {
    getJson(`${base_URL}/pagos?top=50`, authParams(data), 'Listar pagos');
    sleep(1);
}

export function pagoId(data) {
    const params = {
        headers: {
            Authorization: `Bearer ${data.Token}`,
            'Content-Type': 'application/json',
        },
    };

    // 1. Obtener lista de pagos
    const responsePagos = http.get(
        `${base_URL}/pagos?top=50`,
        params
    );

    check(responsePagos, {
        'Listar pagos successful': (r) => r.status === 200,
    });

    const body = asArray(parseBody(responsePagos, []));
    const pagos = takeItems(body);

    // 2. Recorrer pagos
    for (let i = 0; i < pagos.length; i++) {
        const id = pagos[i].id;

        console.log(`ID: ${id}`);
        console.log(`Identificador de Transacción: ${pagos[i].identificadorTransaccion}`);
        console.log(`Identificador de Origen: ${pagos[i].identificadorOrigen}`);
        console.log(`Llave de Idempotencia: ${pagos[i].llaveIdempotencia}`);
        console.log(`ID de Correlación: ${pagos[i].idCorrelacion}`);
        console.log(`ID de Participante Ordenante: ${pagos[i].idParticipanteOrdenante}`);
        console.log(`ID de Participante Receptor: ${pagos[i].idParticipanteReceptor}`);
        console.log(`Monto: ${pagos[i].monto}`);
        console.log(`Código de Moneda: ${pagos[i].codigoMoneda}`);
        console.log(`Estado: ${pagos[i].estado}`);

        // 3. Consumir endpoint por ID
        const response = http.get(
            `${base_URL}/pagos/${id}`,
            params
        );

        const tiempo = response.timings.duration;
        console.log('PAGOS: ' + response.body);

        check(response, {
            [`Pago ID successful (${tiempo} ms)`]: (r) => r.status === 200,
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

    // 1. Obtener lista de pagos
    const responsePagos = http.get(
        `${base_URL}/pagos?top=50`,
        params
    );

    check(responsePagos, {
        'Listar pagos successful': (r) => r.status === 200,
    });

    const body = asArray(parseBody(responsePagos, []));
    const pagos = takeItems(body);

    // 2. Recorrer pagos
    for (let i = 0; i < pagos.length; i++) {
        const identificadorTransaccion = pagos[i].identificadorTransaccion;

        console.log(`Identificador de Transacción: ${identificadorTransaccion}`);
        console.log(`ID: ${pagos[i].id}`);
        console.log(`Identificador de Origen: ${pagos[i].identificadorOrigen}`);
        console.log(`Llave de Idempotencia: ${pagos[i].llaveIdempotencia}`);
        console.log(`ID de Correlación: ${pagos[i].idCorrelacion}`);
        console.log(`ID de Participante Ordenante: ${pagos[i].idParticipanteOrdenante}`);
        console.log(`ID de Participante Receptor: ${pagos[i].idParticipanteReceptor}`);
        console.log(`Monto: ${pagos[i].monto}`);
        console.log(`Código de Moneda: ${pagos[i].codigoMoneda}`);
        console.log(`Estado: ${pagos[i].estado}`);

        // 3. Consumir endpoint por identificador
        const response = http.get(
            `${base_URL}/pagos/identificadores/${identificadorTransaccion}`,
            params
        );

        const tiempo = response.timings.duration;
        console.log('PAGOS: ' + response.body);

        check(response, {
            [`Pago Identificador successful (${tiempo} ms)`]: (r) => r.status === 200,
        });
    }

    sleep(1);
}

export function estadoPago(data) {
    const pago = pagoDesdeListado(data);
    getJson(`${base_URL}/pagos/estado/identificadores/${pago.identificador}`, authParams(data), `Estado pago ${pago.identificador}`);
    sleep(1);
}

export function rechazarPago(data) {
    const pago = crearPagoBase(data);
    const payload = {
        codigoMotivo: 'RECHAZO_DEMO',
        descripcion: 'Rechazo generado desde prueba automatizada',
        ejecutadoPor: 'K6',
    };

    postJson(`${base_URL}/pagos/rechazos/identificadores/${pago.identificador}`, payload, authParams(data), `Rechazar pago ${pago.identificador}`, [200, 201, 204]);
    sleep(1);
}

export function reversarPago(data) {
    const pago = crearPagoBase(data);
    const payload = {
        ejecutadoPor: 'K6',
        descripcion: 'Reversa funcional de prueba',
    };

    postJson(`${base_URL}/pagos/reversiones/identificadores/${pago.identificador}`, payload, authParams(data), `Reversar pago ${pago.identificador}`, [200, 201, 204]);
    sleep(1);
}

export function crearPagoRtp(data) {
    crearPagoBase(data, 'RTP');
    sleep(1);
}

export function consultarPagoRtp(data) {
    const pago = crearPagoBase(data, 'RTP');
    getJson(`${base_URL}/rtp/pagos/identificadores/${pago.identificador}`, authParams(data), `Consultar pago RTP ${pago.identificador}`);
    sleep(1);
}

export function listarTransacciones(data) {
    getJson(`${base_URL}/transacciones?top=50`, authParams(data), 'Listar transacciones');
    sleep(1);
}

export function crearTransaccion(data) {
    crearTransaccionBase(data);
    sleep(1);
}

export function consultarTransaccion(data) {
    const transaccion = transaccionDesdeListado(data);
    getJson(`${base_URL}/transacciones/identificadores/${transaccion.identificador}`, authParams(data), `Consultar transaccion ${transaccion.identificador}`);
    sleep(1);
}

export function estadoTransaccion(data) {
    const transaccion = transaccionDesdeListado(data);
    getJson(`${base_URL}/transacciones/estado/identificadores/${transaccion.identificador}`, authParams(data), `Estado transaccion ${transaccion.identificador}`);
    sleep(1);
}

export function trazabilidadTransaccion(data) {
    const transaccion = transaccionDesdeListado(data);
    getJson(`${base_URL}/transacciones/trazabilidad/identificadores/${transaccion.identificador}`, authParams(data), `Trazabilidad transaccion ${transaccion.identificador}`);
    sleep(1);
}

export function validarTransaccion(data) {
    const transaccion = crearTransaccionBase(data);
    const payload = {
        ejecutadoPor: 'K6',
        descripcion: 'Validacion manual de prueba',
    };

    postJson(`${base_URL}/transacciones/validaciones/identificadores/${transaccion.identificador}`, payload, authParams(data), `Validar transaccion ${transaccion.identificador}`, [200, 201, 204]);
    sleep(1);
}

export function procesarTransaccion(data) {
    const transaccion = crearTransaccionBase(data);
    const payload = {
        ejecutadoPor: 'K6',
        descripcion: 'Procesamiento de prueba',
    };

    postJson(`${base_URL}/transacciones/procesamientos/identificadores/${transaccion.identificador}`, payload, authParams(data), `Procesar transaccion ${transaccion.identificador}`, [200, 201, 204]);
    sleep(1);
}

export function compensarTransaccion(data) {
    const transaccion = crearTransaccionBase(data);
    const payload = {
        ejecutadoPor: 'K6',
        descripcion: 'Compensacion de prueba',
    };

    postJson(`${base_URL}/transacciones/compensaciones/identificadores/${transaccion.identificador}`, payload, authParams(data), `Compensar transaccion ${transaccion.identificador}`, [200, 201, 204]);
    sleep(1);
}

export function liquidarTransaccion(data) {
    const transaccion = crearTransaccionBase(data);
    const payload = {
        ejecutadoPor: 'K6',
        descripcion: 'Liquidacion de prueba',
    };

    postJson(`${base_URL}/transacciones/liquidaciones/identificadores/${transaccion.identificador}`, payload, authParams(data), `Liquidar transaccion ${transaccion.identificador}`, [200, 201, 204]);
    sleep(1);
}

export function rechazarTransaccion(data) {
    const transaccion = crearTransaccionBase(data);
    const payload = {
        codigoMotivo: 'RECHAZO_DEMO',
        descripcion: 'Rechazo funcional de prueba',
        ejecutadoPor: 'K6',
    };

    postJson(`${base_URL}/transacciones/rechazos/identificadores/${transaccion.identificador}`, payload, authParams(data), `Rechazar transaccion ${transaccion.identificador}`, [200, 201, 204]);
    sleep(1);
}

export function fallarTransaccion(data) {
    const transaccion = crearTransaccionBase(data);
    const payload = {
        codigoMotivo: 'ERROR_TECNICO_DEMO',
        descripcion: 'Falla tecnica de prueba',
        ejecutadoPor: 'K6',
    };

    postJson(`${base_URL}/transacciones/fallas/identificadores/${transaccion.identificador}`, payload, authParams(data), `Fallar transaccion ${transaccion.identificador}`, [200, 201, 204]);
    sleep(1);
}

export function crearCiclo(data) {
    crearCicloBase(data);
    sleep(1);
}

export function listarCiclos(data) {
    getJson(`${base_URL}/compensaciones/ciclos?top=50`, authParams(data), 'Listar ciclos');
    sleep(1);
}

export function consultarCiclo(data) {
    const ciclo = cicloDesdeListado(data);
    getJson(`${base_URL}/compensaciones/ciclos/${ciclo.id}`, authParams(data), `Consultar ciclo ${ciclo.id}`);
    sleep(1);
}

export function procesarCiclo(data) {
    const ciclo = crearCicloBase(data);
    postJson(`${base_URL}/compensaciones/ciclos/procesamientos/${ciclo.id}`, null, authParams(data), `Procesar ciclo ${ciclo.id}`, [200, 201, 204]);
    sleep(1);
}

export function cerrarCiclo(data) {
    const ciclo = crearCicloBase(data);
    postJson(`${base_URL}/compensaciones/ciclos/cierres/${ciclo.id}`, null, authParams(data), `Cerrar ciclo ${ciclo.id}`, [200, 201, 204]);
    sleep(1);
}

export function reabrirCiclo(data) {
    const ciclo = crearCicloBase(data);
    postJson(`${base_URL}/compensaciones/ciclos/reaperturas/${ciclo.id}`, null, authParams(data), `Reabrir ciclo ${ciclo.id}`, [200, 201, 204]);
    sleep(1);
}

export function crearInstruccionLiquidacion(data) {
    crearLiquidacionBase(data);
    sleep(1);
}

export function listarSesionesLiquidacion(data) {
    getJson(`${base_URL}/liquidaciones/sesiones?top=50`, authParams(data), 'Listar sesiones liquidacion');
    sleep(1);
}

export function consultarInstruccionLiquidacion(data) {
    const liquidacion = crearLiquidacionBase(data);
    getJson(`${base_URL}/liquidaciones/instrucciones/${liquidacion.id}`, authParams(data), `Consultar instruccion liquidacion ${liquidacion.id}`);
    sleep(1);
}

export function listarEjecucionesConciliacion(data) {
    getJson(`${base_URL}/conciliaciones/ejecuciones?top=50`, authParams(data), 'Listar ejecuciones conciliacion');
    sleep(1);
}

export function listarReglasCumplimiento(data) {
    getJson(`${base_URL}/cumplimiento/reglas`, authParams(data), 'Listar reglas cumplimiento');
    sleep(1);
}

export function limitesCumplimientoParticipante(data) {
    const participante = participanteDesdeListado(data);
    getJson(`${base_URL}/cumplimiento/limites/participantes/${participante.id}`, authParams(data), `Limites cumplimiento participante ${participante.id}`);
    sleep(1);
}

export function listarAlertasOperaciones(data) {
    getJson(`${base_URL}/operaciones/alertas?top=50`, authParams(data), 'Listar alertas operaciones');
    sleep(1);
}
