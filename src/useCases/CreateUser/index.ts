import { MailtrapMailProvider } from "../../providers/implemantations/MailTrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implemantations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


const postgresUsersRepository = new PostgresUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider
);

const createuserContoller = new CreateUserController(
    createUserUseCase
);

export {createUserUseCase, createuserContoller}