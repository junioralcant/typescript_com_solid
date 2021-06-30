import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';
import { IMailProvider } from '../../providers/IMailProvider';


export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ) {}

    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
 
        if(userAlreadyExists) {
            throw new Error('User already exists');
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'Junior Marques',
                email: 'junior.marques@deixanozaul.com.br'
            },
            subject: 'Seja bem vindo!',
            body: "<p>Voçê ja pode fazer login na nossa plataforma</p>"
        })
    }
}