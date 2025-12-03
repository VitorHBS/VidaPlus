import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";




/*  -------------------------- Criação -------------------------- */


export const createUnit = async (data: Prisma.UnidadeHospitalarCreateInput) => {
    const result = await prisma.unidadeHospitalar.create({
        data: {
            nome: data.nome,
            tipo_unidade: data.tipo_unidade,
            endereco: data.endereco
        }
    })
    return result
}


export const createUser = async (data: any) => {
    const result = await prisma.paciente.create({
        data: {
            nome: data.nome,
            cpf: data.cpf,
            data_nascimento: new Date(data.data_nascimento),
            historico_clinico: data.historico_clinico || null,
            id_unidade: data.id_unidade
        }
    })
    return result
}

export const createDoctor = async (data: any) => {
    const result = await prisma.medico.create({
        data: {
            nome: data.nome,
            especialidade: data.especialidade,
            crm: data.crm,
            agenda_json: data.agenda_json,
            id_unidade: data.id_unidade
        }
    })
    return result
}

export const createConsultation = async (data: any) => {
    const result = await prisma.consulta.create({
        data: {
            id_paciente: data.id_paciente,
            id_medico: data.id_medico,
            data_hora: new Date(data.data_hora),
            status: data.status,
            tipo: data.tipo
        }
    })
    return result
}

export const createMedicalRecord = async (data: any) => {
    const result = await prisma.prontuario.create({
        data: {
            id_consulta: data.id_consulta,
            data_registro: new Date(data.data_registro),
            descricao: data.descricao,
            prescricao: data.prescricao
        }
    })
    return result
}



/*  -------------------------- Listagem -------------------------- */

export const getAllUser = async () => {
    const result = await prisma.paciente.findMany({})

    return result;
}


export const getAllUnit = async () => {
    const result = await prisma.unidadeHospitalar.findMany({})

    return result;
}

export const getAllDoctor = async () => {
    const result = await prisma.medico.findMany({})

    return result;
}