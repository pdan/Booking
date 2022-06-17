import { Event } from 'src/event/event.entity'
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'

@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: number

   @Column({unique: true})
   email: string

   @Column()
   password: string

   @Column()
   role: string

   @CreateDateColumn()
   createdAt : String

   @UpdateDateColumn()
   updtedAt : String

   @OneToMany(type => Event, event =>event.id)
   @JoinColumn()
   events: Event[]
}