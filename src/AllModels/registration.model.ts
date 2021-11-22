import { AutoIncrement, Column, CreatedAt, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';


@Table({ tableName: "userinfo", freezeTableName: true })
export class Registration extends Model<Registration> {

    @PrimaryKey
    @AutoIncrement
    @Column
    userinfo_id: number;

    @Column
    firstname: string;

    @Column
    lastname: string;

    @Column
    email: number;

    @Column
    password: string;

    @CreatedAt
    CreatedOn: Date;

    @UpdatedAt
    UpdatedOn: Date;

    
}
