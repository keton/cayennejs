// Type definitions for Cayenne
// Project: https://github.com/myDevicesIoT/cayennejs/blob/master/lib/mqtt.js
// Definitions by: Michal Lower <https://github.com/keton>

/// <reference types="node" />

import * as Events from "events"
import * as Mqtt from "mqtt";

export declare module Datatypes {
    export enum TYPE {
        ANALOG,
        DIGITAL,
        BAROMETRIC_PRESSURE,
        BATTERY,
        LUMINOSITY,
        PROXIMITY,
        RELATIVE_HUMIDITY,
        TEMPERATURE,
        VOLTAGE
    }

    export enum UNIT {
        UNDEFINED,
        PASCAL,
        HECTOPASCAL,
        PERCENT,
        RATIO,
        VOLTS,
        LUX,
        CENTIMETER,
        METER,
        DIGITAL,
        FAHRENHEIT,
        CELSIUS,
        KELVIN,
        MILLIVOLTS
    }
}
export declare interface Options {
    username: string,
    password: string,
    clientId: string
}

export declare class MQTT extends Events.EventEmitter {
    constructor(options: Options);
    options: Options;
    debug: boolean;
    ssl: boolean;
    connected: boolean;
    broker: string;
    client: Mqtt.Client;
    rootTopic: string[];

    public connect(callback: (error: string | null, client: Mqtt.Client) => void): void;
    public rawWrite(channel: number, value: number | string, type?: Datatypes.TYPE, unit?: Datatypes.UNIT): void;
    public getDataTopic(channel: number): string;
    public celsiusWrite(channel: number, value: number): void;
    public fahrenheitWrite(channel: number, value: number): void;
    public kelvinWrite(channel: number, value: number): void;
    public luxWrite(channel: number, value: number): void;
    public pascalWrite(channel: number, value: number): void;
    public hectoPascalWrite(channel: number, value: number): void;
}