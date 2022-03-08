const connection = require('../database/config/connection');
const { dbBuild } = require('../database/config/build');
const getData = require('../database/queries/getProjectsQuery');
const addProjectQuery = require('../database/queries/addProjectQuery');

beforeEach(() => dbBuild());

test('Test get Data', () => getData().then(({ rowCount }) => expect(rowCount).toBe(3)));

test('Test post Data', () => addProjectQuery('Mohammad', 'todo app', 'link', 1).then((res) => expect(res.rowCount).toBe(1)));

afterAll(() => connection.end());

