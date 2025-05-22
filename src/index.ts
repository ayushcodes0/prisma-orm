import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


async function insertUser(email: string, password: string, firstName: string, lastName: string){
    const res = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName 
        },
        select: {
            id: true,
            firstName: true,
            lastName: true
        }
    })
    console.log(res);
}

// insertUser("ayush@123.com", "123", "Ayush", "Singh");

async function updateUser(email: string, newFirstName: string){
    const res = await prisma.user.update({
        where: {email: email},
        data: {
            firstName : newFirstName
        },
        select:{
            id: true,
            firstName: true
        }
    })
    console.log(res)
}
updateUser("ayush@123.com", "Utkarsh");

async function deleteUser(email: string){
    const res = await prisma.user.delete({
        where: {email: email},
    })
    console.log(res);
}

// deleteUser("ayush@123.com");