import { Entity, JoinColumn, OneToMany, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'
// import { User } from 'src/authentication/user.entity'

@Entity()
export class Event {
   @PrimaryGeneratedColumn("uuid")
   id!: number

   @Column()
   name: string

   @Column()
   price: number

   @Column()
   quantity: string

   @CreateDateColumn()
   createdAt: String

   @UpdateDateColumn()
   updtedAt: String
}