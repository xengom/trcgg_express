/**
 * 서비스 관리용 Service
 */
const managementMapper = require('../db/mapper/managementMapper');

const getSubAccountName = async (guild_id) => {
  return await managementMapper.getSubAccountName(guild_id);
};

const postSubAccountName = async (guild_id, riot_name, sub_account_name) => {
  return await managementMapper.postSubAccountName(guild_id, riot_name, sub_account_name);
};

const putSubAccountName = async (guild_id, riot_name, sub_account_name) => {
  return await managementMapper.putSubAccountName(guild_id, riot_name, sub_account_name);
};

const deleteSubAccountName = async (guild_id, riot_name) => {
  return await managementMapper.deleteSubAccountName(guild_id, riot_name);
};

const getDuplicateReplay = async (guild_id, game_id) => {
  return await managementMapper.getDuplicateReplay(guild_id, game_id);
};

const getGuild = async (guild_id) => {
  return await managementMapper.getGuild(guild_id);
};

const postGuild = async (guild_id, guild_name) => {
  return await managementMapper.postGuild(guild_id, guild_name);
};

const postRecord = async (records) => {
  return await managementMapper.postRecord(records);
};

const deleteRecord = async (game_id, guild_id) => {
  return await managementMapper.deleteRecord(game_id, guild_id);
};

const putUserDeleteYN = async (guild_id, riot_name, delete_yn) => {
  return await managementMapper.putUserDeleteYN(guild_id, riot_name, delete_yn);
};

const putUserSubAccountDeleteYN = async (guild_id, riot_name, delete_yn) => {
  return await managementMapper.putUserSubAccountDeleteYN(guild_id, riot_name, delete_yn);
};

const putName = async (guild_id, old_name, new_name) => {
  return await managementMapper.putName(guild_id, old_name, new_name);
};

module.exports = {
  getSubAccountName,
  postSubAccountName,
  putSubAccountName,
  deleteSubAccountName,
  getDuplicateReplay,
  getGuild,
  postGuild,
  postRecord,
  deleteRecord,
  putUserDeleteYN,
  putUserSubAccountDeleteYN,
  putName,
}; 