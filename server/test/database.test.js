const connection = require('../database/config/connection');
const { dbBuild } = require('../database/config/build');
const getProjectsQuery = require('../database/queries/getProjectsQuery');
const addProjectQuery = require('../database/queries/addProjectQuery');
const updateProjectQuery = require('../database/queries/updateProjectQuery');
const deleteProjectQuery = require('../database/queries/deleteProjectQuery');

beforeEach(() => dbBuild());

test('Test Get Projects', () => getProjectsQuery().then(({ rowCount }) => expect(rowCount).toBe(3)));

test('Test Add Project', () => addProjectQuery('todo app', 'taskes', 'link', 1).then((res) => expect(res.rowCount).toBe(1)));

test('Test Update Project', () => updateProjectQuery(1, 'todo app', 'taskes', 'link', 1).then((res) => expect(res.rowCount).toBe(1)));

test('Test Update Name Project', () => updateProjectQuery(1, 'cleander', 'taskes', 'link', 1).then((res) => expect(res.rows[0].name).toBe('cleander')));

test('Test Delete Project', () => deleteProjectQuery(1).then((res) => expect(res.rowCount).toBe(1)));

afterAll(() => connection.end());

