import { Subject } from "./response";

export class ScheduleDto {
    id!: string;
    subject!: Subject;
    place!: string;
    note!: string;
    startTime!: Date;
    finishTime!: Date;
    lecturer!: string;
    emailLecture!: string;
}

export class ScheduleOfStudentDto {
    id!: string;
    student!: StudentDto;
    schedule!: ScheduleDto;
}

export class StudentDto {
    id!: string;
    studentCode!: string;
    fullName!: string;
    age!: number;
    address!: string;
    classCode!: string;
    cpa!: number;
}