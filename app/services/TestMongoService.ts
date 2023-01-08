import TestMongoModel from "../models/TestMongoModel";

//インターフェース
export interface ITest {
  user: string;
  email: string;
}

//クラス
export class TestMongoService {
  public async run(params: any): Promise<any> {
    const testAll = await TestMongoModel.find();
    return testAll;
  }

  public async delete(): Promise<void> {}
}
