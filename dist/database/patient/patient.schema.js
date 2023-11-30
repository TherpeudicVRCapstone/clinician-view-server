"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PatientSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        default: "FirstNameDefault",
        lowercase: true,
    },
    lastName: {
        type: String,
        default: "LastNameDefault",
        lowercase: true,
    },
    currentSession: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Session",
        default: null,
    },
    createdBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Clinician",
        default: null,
    },
    currentGame: { type: mongoose_1.Schema.Types.ObjectId, ref: "Game", default: null },
    pastGames: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Game", default: null }],
    userName: {
        type: String,
        required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        immutable: true,
    },
    patientId: String,
    balloonProgress: {
        achievementProgress: {
            type: String,
            default: "0000000000",
        },
        careerProgress: {
            type: String,
            default: "0",
        },
        levelOneScore: {
            type: String,
            default: "0",
        },
        levelTwoScore: {
            type: String,
            default: "0",
        },
        levelThreeScore: {
            type: String,
            default: "0",
        },
        levelFourScore: {
            type: String,
            default: "0",
        },
        levelFiveScore: {
            type: String,
            default: "0",
        },
    },
});
const PatientModel = (0, mongoose_1.model)("Patient", exports.PatientSchema, "Patient-Collection");
exports.default = PatientModel;
//# sourceMappingURL=patient.schema.js.map